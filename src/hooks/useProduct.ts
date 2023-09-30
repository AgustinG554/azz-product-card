import { useEffect, useRef, useState } from "react";
import type { InitialValues, Product, onChangeArgs } from "../interfaces";

interface useProductsArgs {
  product: Product;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (agrs: onChangeArgs) => void;
}

export const useProduct = ({product, onChange, value = 0, initialValues}:useProductsArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    if (initialValues?.maxCount == counter && value > 0) return;
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue);
    onChange && onChange({count: newValue, product})
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value)
  }, [value]);

  return {
    counter,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
    increaseBy,
    reset,
  }
};