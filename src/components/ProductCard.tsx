import React from 'react'
import { CSSProperties, ReactElement, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import type {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces";

import styles from "../styles/styles.module.css";

export interface Props {
  children?:
    | ReactElement
    | ReactElement[]
    | ((args: ProductCardHandlers) => JSX.Element);
  product: Product;
  className?: string;
  style?: CSSProperties;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (agrs: onChangeArgs) => void;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, isMaxCountReached, reset, increaseBy } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {typeof children === "function"
          ? children({
              count: counter,
              isMaxCountReached,
              maxCount: initialValues?.maxCount,
              product,
              increaseBy,
              reset,
            })
          : children}
      </div>
    </Provider>
  );
};
