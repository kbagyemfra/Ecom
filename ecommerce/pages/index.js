import React from "react";
import Home from "./Home";
import { client } from "../lib/client";

const index = (props) => {
  console.log(props);

  return (
    <div>
      <Home props={props} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default index;
