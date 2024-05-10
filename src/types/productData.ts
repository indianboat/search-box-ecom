export type ProductData = {
  title: string,
  image: string,
  price: number,
  rating: {
    rate: number,
    count: number
  },
  category: string
}