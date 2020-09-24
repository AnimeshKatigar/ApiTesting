const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: 'https://app.shop90.ml/',
  consumerKey: 'ck_9eeb7326927833b94ad1016a24db9f94b5f95c8c',
  consumerSecret: 'cs_c6d42ce87c45a01634f4f924ecfea3ea4204997b',
  version: 'wc/v3',
  queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
});


console.log("-------Products----------");

WooCommerce.get("products")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });

  console.log("-------Orders----------");
  WooCommerce.get("orders")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });