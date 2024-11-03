import React from "react";
import { ProductsTypes } from "../../types/productTypes";
import styled from "styled-components";
import { Link } from "react-router-dom";

export type ProductProps = {
  product: ProductsTypes;
  index: number;
};

///styles
const CardStyles = styled.div`
  width: 30%;
  background-color: #ba4031;
  border-radius: 20px;
  padding: 10px;
  &:hover {
    opacity: 0.9;
  }
  cursor: pointer;
`;
const Image = styled.img`
  width: 200px;
`;

const ProductTitle = styled.h2`
  color: black;
`;

const ProductPrice = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: 800;
`;
///styles
export const Card: React.FC<ProductProps> = ({ product, index }) => {
  return (
    <CardStyles key={index}>
      <Link to={`product/${product.id}`} state={{ product }}>
        <ProductTitle>{product.title}</ProductTitle>
        <div>
          <ProductPrice>${product.price}</ProductPrice>
        </div>
        <div>
          <Image src={product.image} />
        </div>
      </Link>
    </CardStyles>
  );
};
