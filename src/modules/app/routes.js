import { ProductList, ProductForm } from "modules/product";

const Routes = [
  {
    private: false,
    path: "/products",
    title: "My Products",
    layout: "logged",
    component: ProductList
  },
  {
    private: false,
    path: "/products/new",
    title: "Add Product",
    layout: "logged",
    component: ProductForm
  },
  {
    private: false,
    path: "/products/edit/:id",
    title: "Edit Product",
    layout: "logged",
    component: ProductForm
  }
];

export default Routes;
