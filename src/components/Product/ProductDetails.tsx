import React from "react";
import { ProductsTypes } from "../../types/productTypes";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

type ProductProps = {
  product: ProductsTypes;
  index: number;
};

const ProductTitle = styled.h2`
  font-size: 2rem;
`;

const ProductDescription = styled.p`
  font-size: 1.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1.8rem;
  font-weight: 800;
`;

const ProductImage = styled.img`
  width: 400px;
`;

const ProductDetails: React.FC<ProductProps> = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const productData = location.state;
  return (
    <div key={id}>
      <ProductTitle>{productData.product.title}</ProductTitle>
      <ProductDescription>{productData.product.description}</ProductDescription>
      <ProductPrice>${productData.product.price}</ProductPrice>
      <ProductImage src={productData.product.image} />
    </div>
  );
};

export default ProductDetails;
