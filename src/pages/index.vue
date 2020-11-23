<template>
  <div>
  	<div class="content">
      <v-slider />
	    <v-product-list title="Новинки" :list="news" link="/news" />
      <div class="flex col mob:ai-fs">
        <h2 class="text-65 mob:text-36">Акции и Скидки</h2>
        <div class="flex row w-full mob:col">
          <div class="relative w-1/2 mob:w-full bg-grey h-full mr-12 mob:mr-0 mob:mb-6" style="height: 736px">
            <img src="">
            <div class="sale color-white text-25 w-auto absolute py-1 px-3 bg-margon">-20%</div>
          </div>
          <v-partner class="w-1/2 mob:w-full col-reverse" />
        </div>
      </div>
      <v-categories title="Категории" :list="categoryes"/>
	    <v-product-list title="Популярное" :list="popular" link="/popular" />
	    <v-product-list title="Остатки на складе" :list="last" />
    </div>
  </div>
</template>

<script>
import vProductList from '@/components/productList'
import vCategories from '@/components/categories'
import vSlider from '@/components/slider'
export default {
	components: { vProductList, vCategories, vSlider },
  data() {
    return {
      categoryes: [
        {
          link: '/',
          title: 'Ткани',
          img: '/static/stat_product.jpg',
        },
        {
          link: '/',
          title: 'Ткани',
          img: '/static/stat_product.jpg',
        },
        {
          link: '/',
          title: 'Ткани',
          img: '/static/stat_product.jpg',
        },
        {
          link: '/',
          title: 'Ткани',
          img: '/static/stat_product.jpg',
        },
        {
          link: '/',
          title: 'Ткани',
          img: '/static/stat_product.jpg',
        },
        {
          link: '/',
          title: 'Ткани',
          img: '/static/stat_product.jpg',
        },
        {
          link: '/',
          title: 'Ткани',
          img: '/static/stat_product.jpg',
        }
      ],
      news: [
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        }
      ],
      popular: [
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        }
      ],
      last: [
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sale{
  top: 0;
}
</style>