import Vue from "vue";
import Router from "vue-router";
import index from "@/pages/index";
import dostavka from "@/pages/dostavka";
import partneram from "@/pages/partneram";
import products from "@/pages/products";
import product from "@/pages/product";
import favorite from "@/pages/favorite";
import zakaz from "@/pages/zakaz";
import catalogAkzii from "@/pages/catalog_akzii";
import akzii from "@/pages/akzii";
import cabinet from "@/pages/cabinet";
import faq from "@/pages/faq";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/dostavka",
      name: "dostavka",
      component: dostavka
    },
    {
      path: "/partneram",
      name: "partneram",
      component: partneram
    },
    {
      path: "/products",
      name: "products",
      component: products
    },
    {
      path: "/product",
      name: "product",
      component: product
    },
    {
      path: "/favorite",
      name: "favorite",
      component: favorite
    },
    {
      path: "/zakaz",
      name: "zakaz",
      component: zakaz
    },
    {
      path: "/catalogAkzii",
      name: "catalogAkzii",
      component: catalogAkzii
    },
    {
      path: "/akzii",
      name: "akzii",
      component: akzii
    },
    {
      path: "/cabinet",
      name: "cabinet",
      component: cabinet
    },
    {
      path: "/faq",
      name: "faq",
      component: faq
    }
  ]
});
