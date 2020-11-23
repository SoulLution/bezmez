<template>
  <div class="w-full col">
    <div class="content flex row jc-sb ai-fs">
      <div class="flex sticky col jc-sb ai-fs w-1/5 mob:none z-1">
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
      <div class="flex col w-4/5 mob:w-full">
        <div class="input w-full flex jc-fs ai-center mob:none">
          <img class="absolute z-1" src="/static/search.svg" alt="">
          <input class="w-full pl-10 pr-2 py-4" type="search" name="bezmez-search" v-model="search">
        </div>

        <div class="flex col w-full ai-fs mob:jc-fs mob:fixed">
          <div class="flex row jc-sb w-full mt-2">
            <div class="flex row mob:w-full jc-sb">
              <h2 class="text-40 mob:text-24 mr-8 mob:mr-2">Атлас оптом</h2>
              <v-select :options="['4955 товаров на складе','125 товаров на магазине']" v-model="store" />
            </div>
            <v-select class="mob:none" :options="['По умолчанию','По возрастанию','По убыванию','Сначала новые']" v-model="select" />
          </div>
          <div class="flex row w-full jc-fs mt-4 gallery">
            <div class="flex row-reverse jc-fe overflow-hidden" ref="rubric-body">
              <template v-for="(rubric, i) in rubrics">
                <div 
                  class="rubric flex col mr-7 mob:mr-2 color-grey hover:color-margon text-18 cursor-pointer" 
                  :class="{'opacity-0': i < more, 'active': i === current_rubric}" 
                  @click="current_rubric = i"
                  :key="rubric.id" :ref="'rubric'"
                >
                  <div class="img">
                    <img :src="rubric.img">
                  </div>
                  <p>{{rubric.title}}</p>
                </div>
              </template>
            </div>
            <div class="get_back pr-6 mr-8 relative cursor-pointer hover:color-grey mob:none">
              <span class="white_space-nowrap">еще<br>{{more}} рубрик</span>
            </div>
          </div>

          <div class="filters flex row w-full flex-wrap jc-fs">
            <template v-for="(select, i) in selects">
              <v-select :value="select.title"  :key="i"/>
            </template>
          </div>
          
        </div>

        <v-product-list class="mt-6" :list="last" />

        

      </div>
    </div>
    <div class="content">
      <v-partner class="w-full mob:col-reverse" />
    </div>
  </div>
</template>

<script>
import vProductList from '@/components/fullProductList'
export default {
	components: { vProductList },
  data() {
    return {
      select: 'По умолчанию',
      store: '4955 товаров на складе',
      search: '',
      more: 0,
      current_rubric: 0,
      selects: [
        {
          title: 'Вид',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Ширина см',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Рисунок',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Страна производителя',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Цена(погонный метр)',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Статус',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Характеристика',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Цвет',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Состав',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Рапорт',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Направление рисунка',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Шаг',
          id: 'vid',
          value: null,
          childs: []
        },
        {
          title: 'Вес гр/кв метр',
          id: 'vid',
          value: null,
          childs: []
        }
      ],
      rubrics: [
        {
          id: 1,
          img: '/static/stat_product.jpg',
          title: 'Классицизм'
        },
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
      last: [
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
    for(let i = 0; i < 30; i++)
      this.rubrics.push(
        {...this.rubrics[this.rubrics.length-1], id: this.rubrics[this.rubrics.length-1].id + 1}
      )
      this.current_rubric = 30
      this.$nextTick(()=>{
        this.more = 0
        let all_width = this.$refs['rubric-body'].clientWidth,
            current = 0
        for(let i = 0; i < this.$refs['rubric'].length; i++){
          current += this.$refs['rubric'][i].clientWidth + 28
          if(current >= all_width)
            this.more++
        }
      })
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
  .rubric{
    &>.img{
      max-width: 93px;
      max-height: 93px;
      min-width: 93px;
      min-height: 93px;
      border-radius: 50%;
      overflow: hidden;
      &>img{
        max-width: 93px;
        max-height: 93px;
        min-width: 93px;
        min-height: 93px;
        transition: 0.3s;
      }
    }
    &.absolute{
      transform: translateX(-100%);
    }
    &:hover{
      & img {
        transform: scale(1.1);
      }
    }
    &:after{
      content: "";
      display: block;
      position: absolute;
      border-right: 5px solid white;
      border-bottom: 5px solid white;
      max-width: 20px;
      max-height: 42px;
      min-width: 20px;
      min-height: 42px;
      transform: rotate(45deg) translate(-22px, -26px) scale(0);
      transition: 0.3s;
    }
    &.active{
      &:after{
        transform: rotate(45deg) translate(-22px, -26px) scale(1);
      } 
    }
  }
  .filters{
    &>*{
      margin-top: 6px;
      margin-right: 32px;
    }
  }
  .get_back{
    transition: 0.3s;
    &:hover{
      &:after{
        max-width: calc(100% + 5px);
      transform: skew(45deg) translate(-8%, 8px);
      }
    }
    &:before{
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 8px;
      border-bottom: 1px solid $C4;
      border-right: 2px solid $C4;
      transform: skew(45deg) translate(-8%, 8px);
    }
    &:after{
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      padding-top: 5px;
      width: calc(100% + 5px);
      height: 4px;
      background-color: $C4;
      max-width: 0;
      transition: 0.3s;
      z-index: 0;
      transform: skew(45deg) translate(-10px, 8px);
    }
    &>span{
      transform: skew(-45deg);
      padding: relative;
      z-index: 1;
    }
  }

  @media (max-width: 1278px){
    .mob\:fixed{
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding: 0 1rem;
      z-index: 10;
      background-color: white;
    }
    .opacity-0{
      opacity: 1;
    }
    .gallery{
      width: calc(100vw - 1rem);
      overflow-x: auto;
      & .overflow-hidden{
        overflow: visible;
      }
    }
  }
</style>