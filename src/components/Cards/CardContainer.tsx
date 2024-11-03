import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { getAllProducts } from "../../services/getAllProducts";
import styled from "styled-components";

export const CardContainer: React.FC = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsResults = await getAllProducts();
      setAllProducts(productsResults);
    };
    getProducts();
  }, []);

  ///styles
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    gap:60px
  `;
  ///styles

  return (
    <Container>
      {allProducts?.map((product, index) => (
        <Card product={product} index={index} />
      ))}
    </Container>
  );
};
