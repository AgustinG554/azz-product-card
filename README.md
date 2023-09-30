# AZZ-Product-Card

Este paquete de prueba para aprender a subir a npm #eselprimero

### Agustin Gonzalez

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'azz-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10,
    }}
  >
    {() => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )}
</ProductCard>
```
