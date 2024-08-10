import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/apis/products';
import type { ProductsStructure, DataStructure } from './type';

export default function useProducts() {
  const { data, ...queries } = useQuery<DataStructure>({
    queryKey: ['products'],
    queryFn: () => getProducts('?highlight=true', _transform),
  });
  const { galleries = [], lists = [] } = data || {};

  function _formatCurrency(value: any) {
    const isString = typeof value === 'string' && value !== '0';
    const IDR = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    return isString ? IDR.format(+value).replace('Rp', 'IDR').replace(',00', '') : '';
  }
  function _transform(data: any) {
    const { data: source = [], ...sources } = data;
    let galleries = [] as ProductsStructure['galleries'];
    let lists = [] as ProductsStructure['lists'];

    source.forEach((data: any) => {
      const images = data.related_galleries.map((gallery: any) => ({
        alt: gallery.gallery_alt_text,
        src: gallery.src,
        id: gallery.gallery_id,
      })) as ProductsStructure['galleries'];

      galleries = [...galleries, ...images];
      lists.push({
        images,
        duration: `${data.itinerary_day} Days ${data.itinerary_day - 1} Night`,
        title: data.itinerary_name,
        organizedBy: `Organized by ${data.partner_name || data.partner_alias}`,
        description: data.itinerary_short_description,
        prices: {
          initial: _formatCurrency(data.related_variant.itinerary_variant_pub_price),
          discount: _formatCurrency(data.related_variant.itinerary_variant_disc_price),
        },
        href: `${process.env.NEXT_PUBLIC_BASE_URL}/destination/${data.itinerary_slug}`,
      });
    });

    return { ...sources, galleries, lists };
  }

  return { ...queries, galleries, lists };
}
