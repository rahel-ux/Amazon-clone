import React, { useEffect, useState } from 'react'
import Products from "./Products"

const Productscollection = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchData = async() => {
      const request = await fetch("https://fakestoreapi.com/products").then((res)=>
        res.json()
      );
      setProducts(request);
      return request
    }
    fetchData()
  }, [])
  // console.log(products)
  return (
    <>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
        {products
          .slice(1, 4)
          .map(({ id, title, price, description, category, image, rating }) => {
            return (
              <Products
                key={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                rating={rating.rate}
              />
            );
          })}
        <img
          className="md:col-span-full cursor-pointer"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2018/gateway/1110572_smb_gw_desktop_1500x300_lavolio_1x_uk._CB484123630_.jpg"
          alt=""
        />
        <div className="md:col-span-2">
          {products
            .slice(4, 5)
            .map(
              ({ id, title, price, description, category, image, rating }) => {
                return (
                  <Products
                    key={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating.rate}
                  />
                );
              }
            )}
        </div>
        {products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image, rating }) => {
            return (
              <Products
                key={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                rating={rating.rate}
              />
            );
          })}
      </div>
    </>
  );
}

export default Productscollection