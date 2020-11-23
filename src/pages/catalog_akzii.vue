<template>
  <div class="w-full">
    <div class="w-full py-30" style="background-image: url('/static/partner.png')">
      <div class="content">
        <div class="flex col ai-fs px-25 mob:p-0">
          <h1 class="text-48 mob:text-36 my-0">Семейная акция на осень! -90%</h1>
          <span class="text-24 mob:text-18 mt-6 mob:w-4/5">До конца акции осталось 02 часа 37 минут!</span>
          <button class="text-20 mob:text-18 mt-10 bg-l_black mob:w-4/5 border-l_black color-white cursor-pointer py-3 mob:py-7 px-10 radius-5 hover:color-l_black hover:bg-white">Получить скидку</button>
        </div>
      </div>
    </div>
    
    <div class="content flex row jc-sb ai-fs mt-12">
      <div class="flex sticky col jc-sb ai-fs w-1/5 z-1 mob:none">
        <nav class="flex col ai-fs text-18 mb-5.875">
          <template v-for="(category, i) in categoryes">
            <div class="link flex col jc-fs ai-fs font-600 cursor-pointer mb-4 color-d_black" :class="{'active': category.open}" :key="i" @click="category.open = !category.open" @dblclick="$router.push(category.href)">
              <span class="flex pr-6">{{category.title}}</span>
              <div class="flex col mt-1 ai-fs pl-2 color-grey font-400">
                <template v-for="(inside, j) in category.insides">
                  <router-link class="hover:color-margon" :to="inside.href" :key="j">{{inside.title}}</router-link>
                </template>
              </div>
            </div>
          </template>
        </nav>
      </div>
      <div class="flex col ai-fs w-4/5 mob:ai-center mob:w-full">
        <div class="flex col ai-fs w-full mob:col-reverse">
          <div class="input w-full flex jc-fs ai-center">
            <img class="absolute z-1" src="/static/search.svg" alt="">
            <input class="w-full pl-10 pr-2 py-4" type="search" name="bezmez-search" v-model="search">
          </div>
          <div class="flex">
            <h2 class="text-24">Семейная акция</h2>
            <span class="opacity-27 ml-4 b-1 b-solid border-black radius-5 px-4 py-2">37902 товаров</span>
          </div>
        </div>
        <v-product-list class="mt-6" :list="list" />
        <svg class="cursor-pointer " width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" @click="changeSlide(1)">
            <circle cx="30" cy="30" r="29.5" stroke="black"/>
            <path d="M35.7071 29.2929C36.0976 29.6834 36.0976 30.3166 35.7071 30.7071L29.3431 37.0711C28.9526 37.4616 28.3195 37.4616 27.9289 37.0711C27.5384 36.6805 27.5384 36.0474 27.9289 35.6569L33.5858 30L27.9289 24.3431C27.5384 23.9526 27.5384 23.3195 27.9289 22.9289C28.3195 22.5384 28.9526 22.5384 29.3431 22.9289L35.7071 29.2929ZM34 29L35 29L35 31L34 31L34 29Z" fill="black"/>
        </svg>
        <span class="text-center none mob:block w-1/2">Перейти на другую страницу</span>
      </div>
    </div>
    <div class="content mt-40">
      <v-partner class="mob:col-reverse" />
    </div>
  </div>
</template>

<script>
import vProductList from '@/components/fullProductList'
export default {
	components: { vProductList },
  data() {
    return {
      search: '',
      categoryes: [
        {
          title: 'Ткани',
          href: '/',
          insides: [
            {
              title: 'Для штор',
              href: '/'
            },
            {
              title: 'Для скатерти',
              href: '/'
            },
            {
              title: 'Спец ткань',
              href: '/'
            },
            {
              title: 'Пано',
              href: '/'
            },
          ]
        },
        {
          title: 'Тюль',
          href: '/',
          insides: [
            {
              title: 'Для штор',
              href: '/'
            },
            {
              title: 'Для скатерти',
              href: '/'
            },
            {
              title: 'Спец ткань',
              href: '/'
            },
            {
              title: 'Пано',
              href: '/'
            },
          ]
        },
        {
          title: 'Карнизы',
          href: '/',
          insides: [
            {
              title: 'Для штор',
              href: '/'
            },
            {
              title: 'Для скатерти',
              href: '/'
            },
            {
              title: 'Спец ткань',
              href: '/'
            },
            {
              title: 'Пано',
              href: '/'
            },
          ]
        },
        {
          title: 'Аксессуары',
          href: '/',
          insides: [
            {
              title: 'Для штор',
              href: '/'
            },
            {
              title: 'Для скатерти',
              href: '/'
            },
            {
              title: 'Спец ткань',
              href: '/'
            },
            {
              title: 'Пано',
              href: '/'
            },
          ]
        },
        {
          title: 'Готовые изделия',
          href: '/',
          insides: [
            {
              title: 'Для штор',
              href: '/'
            },
            {
              title: 'Для скатерти',
              href: '/'
            },
            {
              title: 'Спец ткань',
              href: '/'
            },
            {
              title: 'Пано',
              href: '/'
            },
          ]
        },
        {
          title: 'Фурнитура',
          href: '/',
          insides: [
            {
              title: 'Для штор',
              href: '/'
            },
            {
              title: 'Для скатерти',
              href: '/'
            },
            {
              title: 'Спец ткань',
              href: '/'
            },
            {
              title: 'Пано',
              href: '/'
            },
          ]
        },
        {
          title: 'Ковры',
          href: '/',
          insides: [
            {
              title: 'Для штор',
              href: '/'
            },
            {
              title: 'Для скатерти',
              href: '/'
            },
            {
              title: 'Спец ткань',
              href: '/'
            },
            {
              title: 'Пано',
              href: '/'
            },
          ]
        }
      ],
      list: [
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 0
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
  },
  created() {
    this.categoryes = this.categoryes.map(x => { return {...x, open: false} })
    this.categoryes[0].open = true
  }
}
</script>

<style lang="scss" scoped>
  .sticky{
    top: 4rem;
  }
  nav{
    &>div{
      &>span{
        &:after{
          content: "";
          display: block;
          position: absolute;
          border-right: 1px solid black;
          border-bottom: 1px solid black;
          max-width: 8px;
          max-height: 8px;
          min-width: 8px;
          min-height: 8px;
          transform: rotate(45deg) translate(-1px, -2px);
          right: 0;
          transition: 0.3s;
        }
      }
      &>div{
        max-height: 0;
        overflow: hidden;
        transition: 0.3s;
      }
      &.active{
        &>span{
          &:after{
            transform: rotate(-135deg) translate(-1px, -2px);
          }
        }
        &>div{
          max-height: 40vh;
        }
      }
    }
  }
  .input{
    &>img{
      left: 19px;
    }
    &>input{
      border: 1px solid #929292;
    }
  }
  button{
      transition: 0.3s;
      box-shadow: 0 0 40px 40px $l_black inset, 0 0 0 0 $l_black;
    &:hover{
      box-shadow: 0 0 10px 0 $l_black inset, 0 0 10px 5px $l_black;
    }
  }
  .text-center{
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #000000;
    opacity: 0.3;
  }
</style>