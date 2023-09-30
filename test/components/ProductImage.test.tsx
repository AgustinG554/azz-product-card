import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe de mostrar el componente con la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage image={product2.img} />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente usando ProductCard', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
