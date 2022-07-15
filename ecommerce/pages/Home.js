import FooterBanner from "./components/FooterBanner";
import HeroBanner from "./components/HeroBanner";

// import { client } from "../lib/client";

const Home = ({ props }) => {
  const { products, bannerData } = props;

  return (
    <>
      {/* <HeroBanner heroBanner={} /> */}
      <HeroBanner heroBanner={bannerData && bannerData[0]} />

      {/* {console.log(client)} */}
      {/* Home Header */}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Variety of Speakers</p>
      </div>

      {/* Products */}
      <div className="products-container">
        {products?.map((prod) => prod.name)}
      </div>

      {/* Footer */}
      <FooterBanner />
    </>
  );
};

// const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return {
//     props: { products, bannerData },
//   };
// };

export default Home;
