<template>
  <header class="w-full bg-white flex col h-48 mob:sticky z-11">
    <div class="content flex row jc-sb">
      <div class="flex row jc-sb w-1/3 mob:w-auto z-1">
        <div class="burger" :class="{'active': burger}" @click="$store.dispatch('show/setBurger', !burger)">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav class="flex row color-grey text-18 mob:none">
          <router-link class="mx-5 pb-1 hover:color-margon" to="/partneram">Партнерам</router-link>
          <router-link class="mx-5 pb-1 hover:color-margon" to="/dostavka">Доставка</router-link>
          <router-link class="mx-5 pb-1 hover:color-margon" to="/faq">FAQ</router-link>
          <router-link class="mx-5 pb-1 hover:color-margon" to="/contacts">Контакты</router-link>
        </nav>
      </div>
      <div class="flex row w-1/3 mob:h-full">
        <router-link to="/" class="mob:h-full"><img class="mob:h-full" src="/static/logo.png"></router-link>
      </div>
      <div class="flex row w-1/3 mob:w-full">
        <a class="text-18" href="tel:8 777 777 77 77">8 777 777 77 77</a>
        <nav class="flex row bg-white text-12 color-grey mob:none">
          <div class="h-9 jc-sb px-2 hover:color-margon cursor-pointer search flex col">
            <img src="/static/search.svg" alt="">
            <span>Поиск</span>
          </div>
          <div class="h-9 jc-sb px-2 hover:color-margon flex col" :class="{'router-link-exact-active': $route.path === '/cabinet'}" @click="checkUser()">
            <img src="/static/user.svg" alt="">
            <span>Аккаунт</span>
          </div>
          <router-link class="h-9 jc-sb px-2 hover:color-margon flex col" to="/favorite">
            <img src="/static/heart.svg" alt="">
            <span>Избранное</span>
          </router-link>
          <router-link class="h-9 jc-sb px-2 hover:color-margon flex col" to="/products">
            <img src="/static/basket.svg" alt="">
            <span>Корзина</span>
          </router-link>

        </nav>
      </div>
    </div>
    <div class="none w-full bg-white mob:flex">
      <nav class="flex row w-full jc-sb text-12 color-grey">
        <div class="w-1/4 b-0 bb-1 bt-1 b-solid border-black jc-center px-2 hover:color-margon cursor-pointer search flex col" style="height: 63px">
          <img src="/static/search.svg" alt="">
          <span>Поиск</span>
        </div>
        <div class="w-1/4 b-0 bb-1 bt-1 bl-1 b-solid border-black jc-center px-2 hover:color-margon flex col" style="height: 63px" :class="{'router-link-exact-active': $route.path === '/cabinet'}" @click="checkUser()">
          <img src="/static/user.svg" alt="">
          <span>Аккаунт</span>
        </div>
        <router-link class="w-1/4 b-0 bb-1 bt-1 bl-1 b-solid border-black jc-center px-2 hover:color-margon flex col" to="/favorite" style="height: 63px">
          <img src="/static/heart.svg" alt="">
          <span>Избранное</span>
        </router-link>
        <router-link class="w-1/4 b-0 bb-1 bt-1 bl-1 b-solid border-black jc-center px-2 hover:color-margon flex col" to="/products" style="height: 63px">
          <img src="/static/basket.svg" alt="">
          <span>Корзина</span>
        </router-link>
      </nav>
    </div>
    <div class="navigation none w-full col ai-fs jc-fs bg-white mob:flex" :class="{'active': burger}">
      <nav class="flex col ai-fs text-18 mb-5.875">
        <template v-for="(category, i) in categoryes">
          <div class="flex col jc-fs ai-fs font-600 cursor-pointer pl-10 mb-4 color-d_black" :class="{'active': category.open}" :key="i" @click="category.open = !category.open" @dblclick="$router.push(category.href)">
            <span class="flex pr-6">{{category.title}}</span>
            <div class="flex col mt-1 ai-fs pl-2 color-grey font-400">
              <template v-for="(inside, j) in category.insides">
                <router-link class="hover:color-margon py-2" :to="inside.href" :key="j">{{inside.title}}</router-link>
              </template>
            </div>
            </div>
        </template>
      </nav>
      <router-link class="mx-5 pb-1 hover:color-margon" to="/partneram">Партнерам</router-link>
      <router-link class="mx-5 pb-1 hover:color-margon" to="/dostavka">Доставка</router-link>
      <router-link class="mx-5 pb-1 hover:color-margon" to="/faq">FAQ</router-link>
      <router-link class="mx-5 pb-1 hover:color-margon" to="/contacts">Контакты</router-link>
      <router-link class="mx-5 pb-1 hover:color-margon" to="/">Поиск</router-link>
      <router-link class="mx-5 pb-1 hover:color-margon" to="/cabinet">Аккаунт</router-link>
      <router-link class="mx-5 pb-1 hover:color-margon" to="/favorite">Избранное</router-link>
      <router-link class="mx-5 pb-1 hover:color-margon" to="/products">Корзина</router-link>
      
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Ткани',
          href: '/'
        },
        {
          title: 'Тюль',
          href: '/'
        },
        {
          title: 'Карнизы',
          href: '/'
        },
        {
          title: 'Аксессуары',
          href: '/'
        },
        {
          title: 'Готовые изделия',
          href: '/'
        },
        {
          title: 'Фурнитура',
          href: '/'
        },
        {
          title: 'Ковры',
          href: '/'
        }
      ],
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
    }
  },
  created() {
    this.categoryes = this.categoryes.map(x => { return {...x, open: false} })
  },
  computed: {
    burger(){
      return this.$store.getters['show/getBurger']
    }
  },
  methods: {
    checkUser(){
      this.$router.push('/cabinet')
    }
  }
}
</script>

<style lang="scss" scoped>
  .burger{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    // margin-right: 100px;
    &>div{
      width: 30px;
      height: 1px;
      background-color: black;
      margin-top: 5px;
      transition: 0.3s;
      &:first-child{
        margin-top: 0;
      }
      &:last-child{
        width: 21px;
      }
    }
    &.active{
      &>div{
        transform: rotate(45deg) translate(0px, 5px);
        &:first-child{
          opacity: 0;
        }
        &:last-child{
          transform: rotate(-45deg) translate(0px, -5px);
          width: 30px;
        }
      }
    }
  }
  nav>a, nav>div{
    cursor: pointer;
    &:after{
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      @extend .bg-d_grey;
      width: 100%;
      max-width: 0;
      transition: 0.3s;
    }
    &:hover{
      &:after{
      @extend .bg-grey;
        max-width: 35%;
      }
    }
    &.router-link-exact-active{
      @extend .color-black;
      &:after{
        max-width: 100%;
      }
    }
  }
  
.link{
  transition: 0.3s;
  &:after{
    content: "";
    position: absolute;
    left: -5px;
    bottom: 0;
    height: 1px;
    @extend .bg-black;
    width: 100%;
    max-width: 0;
    transition: 0.3s;
  }
  &:hover{
    @extend .color-black;
    transform: translateX(5px);
    &:after{
      max-width: 100%;
    }
  }
}
@media (max-width: 1278px){
  .navigation{
    position: fixed;
    left: 0;
    top: 63px;
    transform: translateX(-100%);
    transition: 0.3s;
    height: calc(100vh - 63px);
    overflow: auto;
    &.active{
      transform: translateX(0%);
    }
    & nav{
      width: 100%;
      margin-bottom: 2rem;
      &>div{
        border-bottom: 1px solid #00000010;
        width: 100%;
        padding-bottom: 27px;
        padding-top: 21px;
        &:after{
          display: none;
        }
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
    &>a{
      font-weight: 600;
      font-size: 18px;
      line-height: 23px;
      color: #000000;
      padding-left: 2.5rem;
      margin-left: 0;
      margin-bottom: 40px;
      opacity: 0.88;
    }
  }
  header{
    top: -63px;
    &>*:first-child{
      height: 63px;
    }
  }
}
</style>