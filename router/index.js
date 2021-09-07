import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import Product from "../views/Product.vue";
import SaveEditProduct from "../views/SaveEditProduct.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
  {
    path: "/saveeditproduct/:id",
    name: "SaveEditProduct",
    component: SaveEditProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
