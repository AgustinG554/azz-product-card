import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButton";
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from "../interfaces";


export type { Props as ProductCardProps } from "./ProductCard";
export { ProductButtons, Props as ProductButtonsProps } from "./ProductButton";
export { ProductImage, Props as ProductImageProps } from "./ProductImage";
export { ProductTitle, Props as ProductTitleProps } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Buttons: ProductButtons,
  Image: ProductImage
})

export default ProductCard;
