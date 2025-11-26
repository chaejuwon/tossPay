import Card from "../ui/Card";
import { useEffect, useState } from "react";
import useCartStore from "../../store/useCartStore";
import { product } from "../../types/product";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store/useProductStore";

function ProductList() {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/product.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  },[setProducts]);

  return (
    <div className="max-w-[900px] mx-auto my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((item) => (
          <Card className="cursor-pointer" key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <img src={`${process.env.PUBLIC_URL}${item.thumbnail}`} alt={item.name} />
              <p className="text-center md:text-left text-gray-600 font-semibold mt-3">{item.name}</p>
              <p className="text-center md:text-left flex flex-col md:flex-row items-center gap-2">
                <span className="font-bold text-red-600">
                  {Math.round(((item?.realPrice - item?.price) / item?.realPrice) * 100)}%
                </span>
                <span className="">{item.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                <span className="text-xs line-through">{item.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
              </p>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default ProductList;