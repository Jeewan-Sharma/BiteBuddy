export interface IFoods {
  posItemID: number,
  item: string,
  description: string,
  price: number,
  discount?: number,
  netPrice?: number,
  imageUrl: string,
  likes: number,
  disLikes: number,
}
