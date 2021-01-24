// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
// Data
import products from "../products";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const filteredList = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  const productList = filteredList.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
