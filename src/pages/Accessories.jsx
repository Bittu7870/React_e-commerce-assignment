import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";

const Accessories = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const AllProductData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error(`Api request failed with status ${response.status}`);
      }
      const result = await response.json();
      console.log("API Response:", result);
      setLoading(false);
      setProductData(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    AllProductData();
  }, []);

  return (
    <Layout>
      <h3 className="py-4">Clothing for Men and Women</h3>
      {loading ? (
        <h2 className="text-primary">Loading...</h2>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {productData
            .filter(
              (item) =>
                item.category === "electronics" || item.category === "jewelery"
            )
            .map((item) => (
              <div key={item.id} className="col">
                <ProductCard item={item} />
              </div>
            ))}
        </div>
      )}
    </Layout>
  );
};

export default Accessories;
