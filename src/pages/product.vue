<template>
  <div class="popup fixed bg-white flex jc-center ai-fs z-11">
    <div class="popup-content w-full jc-fs col">
      <div class="flex row w-full ai-fs">
        <div class="flex col w-1/2" style="margin-right: 50px;">
          <div class="img w-full">
            <img :src=" product.colors[current_color].images[current_image]" style="max-height: 660px" />
          </div>
          <div class="slides w-full flex row jc-fs">
            <template v-for="(src, i) in product.colors[current_color].images">
              <div class="slide h-full mr-7 cursor-pointer" :class="{'active': current_image === i}" @click="current_image = i" :key="i">
                <img :src="src">
              </div>
            </template>
          </div>
          <div class="w-full flex col jc-fs ai-fs mt-12">
            <h2 class="text-25 color-d_black">Все цвета</h2>
            <div class="colors w-full flex row jc-fs">
              <template v-for="(src, i) in product.colors">
                <div class="slide h-full mr-7 cursor-pointer" :class="{'active': current_color === i}" @click="current_color = i; current_image = 0" :key="i">
                  <img :src="src.images[0]">
                </div>
              </template>
            </div>
          </div>
        </div>

        <div class="flex col w-1/2 ai-fs">
        <div class="flex row w-full jc-sb">
          <h1 class="text-45">{{product.title}}</h1>
          <svg width="20" @click="$router.go(-1)" class="cursor-pointer" style="margin-top: -24px" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="1" width="25" height="2" transform="rotate(45 2 1)" fill="#0E0E0E"/>
            <rect width="25" height="2" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.32227 19.6777)" fill="#0E0E0E"/>
          </svg>
        </div>
          <p class="color-grey my-0 text-18">Цена за {{product.for_whaat}}</p>
          <p class="color-grey my-0 text-18 mt-1">on <strong class="color-black text-22">{{product.min_price}}</strong></p>
          <div class="flex row mt-20 ai-fs">
            <div class="flex col ai-fs color-grey text-18 mr-10">
              <span class="mb-2">Цвет</span>
              <v-color-select :options="product.colors" value_name="title" :value="product.colors[0]" v-model="current_color"/>
            </div>
            <div class="flex col ai-fs color-grey text-18">
              <span class="mb-2">Количество</span>
              <v-amount v-model="product.colors[current_color].current" :max="product.colors[current_color].store.reduce((prev, x) => {return prev + x.value},0)"/>
            </div>
          </div>
          <button class="text-20 mt-10 bg-l_black border-l_black color-white cursor-pointer py-3 px-30 radius-5 hover:color-l_black hover:bg-white">Добавить в корзину</button>
          <span class="text-12 opacity-30 mt-2">Последняя покупка: 10 минут назад</span>

          <div class="flex row ai-fs mt-6">
            <div class="flex col w-1/2 ai-fs pr-15">
              <h3 class="text color-d_black mb-5">Характеристики</h3>
              <div class="flex row w-full jc-sb flex-wrap">
                <template v-for="(character, i) in product.characters">
                  <div class="character flex row jc-sb w-1/2 text-14 mb-4" :key="i">
                    <span class="color-grey">{{character.key}}</span>
                    <div>{{character.value}}</div>
                  </div>
                </template>
              </div>
            </div>
            
            <div class="flex col w-1/2 pl-20 jc-fs b-solid border-C4 bl-1 b-0" style="min-height: 660px">
              <div class="flex col w-full ai-fs b-dashed border-C4 bb-2 b-0 pb-4">
                <h3 class="text color-d_black mb-5">Наличие на складах</h3>
                <div class="flex row w-full jc-sb flex-wrap">
                  <template v-for="(store, i) in product.colors[current_color].store">
                    <div class="character flex row jc-sb w-1/2 text-14 mb-4" :key="i">
                      <span>{{store.key}}</span>
                      <div class="color-grey">{{store.value}}</div>
                    </div>
                  </template>
                </div>
              </div>
              <div class="flex col w-full jc-fs ai-fs">
                <h3 class="text color-d_black mt-1 mb-5">Описание</h3>
                <span class="opacity-76" style="line-height: 21px;">{{product.about}}</span>
              </div>
              <div class="flex col w-full ai-fs">
                <h3 class="text color-d_black mb-5">Все товары раздела</h3>
                <span class="opacity-76" style="line-height: 21px;">
                  <router-link to="/">Ткани</router-link>/
                  <router-link to="/">Польшие</router-link>/
                  <router-link to="/">Черные</router-link>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <v-product-list :list="similars"/>
      <v-partner class="mt-40" />
    </div>
  </div>
</template>

<script>
import vProductList from '@/components/similars'
export default {
	components: { vProductList },
  data() {
    return {
      current_color: 0,
      current_image: 0,
      product: {
        min_price: 201,
        for_whaat: 'метр',
        title: 'Название',
        about: 'Ткaнь прочная, износостойкая. Широко используются для изготовления верхней одежды, рюкзаков, обуви, снаряжения и рабочей одежды. Без ПУ покрытия.',
        colors: [
          {
            title: 'Оранжевый',
            price: 201,
            store: [
              {
                key: 'Турция',
                value: 10
              },
              {
                key: 'Алматы',
                value: 100
              }
            ],
            current: 0,
            images: ['/static/orange.png', '/static/partner.png']
          },
          {
            title: 'Синий',
            price: 202,
            store: [
              {
                key: 'Турция',
                value: 0
              },
              {
                key: 'Алматы',
                value: 0
              }
            ],
            current: 0,
            images: ['/static/blue.png']
          }
        ],
        characters: [
          {
            key: 'Состав',
            value: '100% п/э'
          },
          {
            key: 'Состав',
            value: '100% п/э'
          },
          {
            key: 'Цвет',
            value: 'Оранжевый'
          },
          {
            key: 'Цвет',
            value: 'Оранжевый'
          },
          {
            key: 'Состав',
            value: '100% п/э'
          },
          {
            key: 'Состав',
            value: '100% п/э'
          },
          {
            key: 'Цвет',
            value: 'Оранжевый'
          },
          {
            key: 'Цвет',
            value: 'Оранжевый'
          },
          {
            key: 'Состав',
            value: '100% п/э'
          },
          {
            key: 'Состав',
            value: '100% п/э'
          },
          {
            key: 'Цвет',
            value: 'Оранжевый'
          },
          {
            key: 'Цвет',
            value: 'Оранжевый'
          },
        ]
      },
      similars: [
        {
          link: '/',
          title: 'Красный',
          img: '/static/partner.png'
        },
        {
          link: '/',
          title: 'Красный',
          img: '/static/partner.png'
        },
        {
          link: '/',
          title: 'Красный',
          img: '/static/partner.png'
        },
        {
          link: '/',
          title: 'Красный',
          img: '/static/partner.png'
        },
        {
          link: '/',
          title: 'Красный',
          img: '/static/partner.png'
        },
        {
          link: '/',
          title: 'Красный',
          img: '/static/partner.png'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .character:nth-child(odd){
    padding-right: 12.5px;
  }
  .character:nth-child(even){
    padding-left: 12.5px;
  }
  button{
    transition: 0.3s;
      box-shadow: 0 0 40px 40px $l_black inset, 0 0 0 0 $l_black;
    &:hover{
      box-shadow: 0 0 10px 0 $l_black inset, 0 0 10px 5px $l_black;
    }
  }
  .popup{
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    padding-bottom: 55px;
    overflow: auto;
    &-content{
      padding: 55px;
    }
  }
  img{
    width: 100%;
    height: 100%;
  }
  .slides{
    height: 100px;
    &>.slide{
      width: 80px;
      padding-bottom: 5px;
      &:after{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        max-width: 0;
        @extend .bg-d_grey;
        transition: 0.3s;
      }
      &:hover{
        &:after{
          @extend .bg-grey;
          max-width: 35%;
        }
      }
      &.active{
        &:after{
          max-width: 100%;
        }
      }
    }
  }
  .colors{
    height: 240px;
    &>.slide{
      width: 184px;
      padding: 8px;
      &:before, &:after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 0;
        max-height: 0;
        border-width: 0;
        transition: 0.3s;
      }
      &:before{
        // border-left: 1px solid $d_grey;
        // border-bottom: 1px solid $d_grey;
        left: -1px;
        bottom: -1px;
      }
      &:after{
        // border-right: 1px solid $d_grey;
        // border-top: 1px solid $d_grey;
        right: -1px;
        top: -1px;
      }
      &:hover{
        &:before{
          border-left: 1px solid $d_grey;
          border-bottom: 1px solid $d_grey;
        }
        &:after{
          border-right: 1px solid $d_grey;
          border-top: 1px solid $d_grey;
        }
        &:before, &:after{
          @extend .border-grey;
          max-width: 35%;
          max-height: 35%;
        }
      }
      &.active{
        &:before{
          border-left: 1px solid $d_grey;
          border-bottom: 1px solid $d_grey;
        }
        &:after{
          border-right: 1px solid $d_grey;
          border-top: 1px solid $d_grey;
        }
        &:before, &:after{
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
</style>