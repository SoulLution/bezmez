<template>
  <div class="w-full col">
    <div class="content flex row jc-sb ai-fs">
      <div class="flex sticky col jc-sb ai-fs w-1/5 mob:none z-1">
        <nav class="flex col ai-fs text-18 mb-5.875">
          <template v-for="(category, i) in categoryes">
            <div
              class="link flex col jc-fs ai-fs font-600 cursor-pointer mb-4 color-d_black"
              :class="{ active: category.open }"
              :key="i"
              @click="category.open = !category.open"
              @dblclick="$router.push(category.href)"
            >
              <span class="flex pr-6">{{ category.title }}</span>
              <div class="flex col mt-1 ai-fs pl-2 color-grey font-400">
                <template v-for="(inside, j) in category.insides">
                  <router-link
                    class="hover:color-margon"
                    :to="inside.href"
                    :key="j"
                    >{{ inside.title }}</router-link
                  >
                </template>
              </div>
            </div>
          </template>
        </nav>
      </div>
      <div class="flex col w-4/5 mob:w-full">
        <div class="input w-full flex jc-fs ai-center mob:none">
          <img class="absolute z-1" src="/static/search.svg" alt="" />
          <input
            class="w-full pl-10 pr-2 py-4"
            type="search"
            name="bezmez-search"
            v-model="search"
          />
        </div>

        <div
          class="flex col w-full ai-fs mob:jc-fs mob:fixed mob:overflow-auto"
          :class="{ active: open_selects }"
        >
          <div
            class="filter-head none mob:flex row jc-sb w-full b-0 bb-1 b-solid border-l_grey"
          >
            <h1 class="text-48">Фильтры</h1>
            <svg
              @click="open_selects = !open_selects"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="21.2133"
                y="22.2129"
                width="30"
                height="1"
                transform="rotate(-135 21.2133 22.2129)"
                fill="black"
              />
              <rect
                x="0.213135"
                y="21.2139"
                width="30"
                height="1"
                transform="rotate(-45 0.213135 21.2139)"
                fill="black"
              />
            </svg>
          </div>
          <div class="flex row jc-sb w-full mt-2">
            <div class="flex row mob:w-full jc-sb">
              <h2 class="text-40 mob:text-24 mr-8 mob:mr-2">Атлас оптом</h2>
              <v-select
                :options="['4955 товаров на складе', '125 товаров на магазине']"
                v-model="store"
              />
            </div>
            <v-select
              class="mob:none"
              :options="[
                'По умолчанию',
                'По возрастанию',
                'По убыванию',
                'Сначала новые'
              ]"
              v-model="select"
            />
          </div>
          <div class="flex row w-full jc-fs mt-4 gallery">
            <div
              class="flex row-reverse jc-fe overflow-hidden"
              ref="rubric-body"
            >
              <template v-for="(rubric, i) in rubrics">
                <div
                  class="rubric flex col mr-7 mob:mr-2 color-grey hover:color-margon text-18 cursor-pointer"
                  :class="{
                    'opacity-0': i < more,
                    active: i === current_rubric
                  }"
                  @click="current_rubric = i"
                  :key="rubric.id"
                  :ref="'rubric'"
                >
                  <div class="img">
                    <img :src="rubric.img" />
                  </div>
                  <p>{{ rubric.title }}</p>
                </div>
              </template>
            </div>
            <div
              class="get_back pr-6 mr-8 relative cursor-pointer hover:color-grey mob:none"
            >
              <span class="white_space-nowrap">еще<br />{{ more }} рубрик</span>
            </div>
          </div>

          <div
            class="filters flex mob:none row w-full flex-wrap jc-fs ai-fs"
            :class="{ active: show_filters }"
          >
            <template v-for="(select, i) in selects">
              <div class="flex col ai-fs color-grey" :key="i">
                <span>{{ select.title }}</span>
                <component
                  :is="
                    select.type === 'select'
                      ? 'vSelect'
                      : select.type === 'inputs'
                      ? 'vInputs'
                      : ''
                  "
                  :class="
                    select.type === 'select'
                      ? 'b-2 b-solid border-black mt-2'
                      : 'mt-2'
                  "
                  :value="select.value"
                  @input="select.value = e"
                  :title="select.title"
                />
              </div>
            </template>
          </div>
          <span
            class="show_filters flex pr-6 color-grey text-18 mt-4 mob:none cursor-pointer"
            :class="{ active: show_filters }"
            @click="show_filters = !show_filters"
            >{{ show_filters ? "Скрыть" : "Расширенный поиск" }}</span
          >
          <div class="filters mob:flex none row w-full flex-wrap jc-fs">
            <template
              v-for="(select, i) in selects.sort((a, b) =>
                a.id === 'price' ? -1 : 1
              )"
            >
              <div
                class="flex col ai-fs px-4 jc-fs py-7 w-full b-0 bb-1 b-solid border-l_grey"
                :key="i"
              >
                <span
                  class="select-title pr-6 flex row color-grey cursor-pointer text-24 mb-4"
                  :class="{ open: select.open }"
                  @click="select.open = !select.open"
                  >{{ select.title }}</span
                >
                <component
                  :is="
                    select.type === 'select'
                      ? 'vSelect'
                      : select.type === 'inputs'
                      ? 'vInputs'
                      : ''
                  "
                  class="selecter w-auto text-24"
                  :class="{
                    'b-2 b-solid border-black mt-2': select.type === 'select',
                    'mt-2': !select.type === 'select',
                    open: select.open
                  }"
                  :title="select.title"
                  :value="select.value"
                  @input="select.value = e"
                />
              </div>
            </template>
          </div>

          <button
            @click="open_selects = !open_selects"
            class="none w-full mob:flex text-18 mt-40 bg-l_black border-l_black color-white cursor-pointer py-7 px-10 radius-5 hover:color-l_black hover:bg-white"
          >
            Показать 134 товаров
          </button>
        </div>

        <div class="none mob:flex w-full mt-10 jc-sb">
          <button
            @click="open_selects = !open_selects"
            class="text-18 bg-white border-l_black color-l_black cursor-pointer py-3 mr-2 w-1/2 radius-5 hover:color-l_black hover:bg-white"
          >
            Фильтры
          </button>

          <v-select
            class="arrow-none text-18 bg-white b-2 b-solid border-l_black color-l_black cursor-pointer py-3 ml-2 w-1/2 radius-5 hover:color-l_black hover:bg-white"
            :options="[
              'По умолчанию',
              'По возрастанию',
              'По убыванию',
              'Сначала новые'
            ]"
            v-model="select"
          />
        </div>

        <v-product-list class="mt-6" :list="last" />

        <svg
          class="cursor-pointer none mob:block "
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="changeSlide(1)"
        >
          <circle cx="30" cy="30" r="29.5" stroke="black" />
          <path
            d="M35.7071 29.2929C36.0976 29.6834 36.0976 30.3166 35.7071 30.7071L29.3431 37.0711C28.9526 37.4616 28.3195 37.4616 27.9289 37.0711C27.5384 36.6805 27.5384 36.0474 27.9289 35.6569L33.5858 30L27.9289 24.3431C27.5384 23.9526 27.5384 23.3195 27.9289 22.9289C28.3195 22.5384 28.9526 22.5384 29.3431 22.9289L35.7071 29.2929ZM34 29L35 29L35 31L34 31L34 29Z"
            fill="black"
          />
        </svg>
        <span class="text-center none mob:block w-1/2 mb-11"
          >Перейти на другую страницу</span
        >
      </div>
    </div>
    <div class="content">
      <v-partner class="w-full mob:col-reverse" />
    </div>
  </div>
</template>

<script>
import vProductList from "@/components/fullProductList";
export default {
  components: { vProductList },
  data() {
    return {
      select: "По умолчанию",
      store: "4955 товаров на складе",
      search: "",
      more: 0,
      show_filters: false,
      current_rubric: 0,
      open_selects: false,
      selects: [
        {
          title: "Вид",
          open: false,
          id: "vid",
          type: "select",
          value: "Вид",
          childs: []
        },
        {
          title: "Ширина см",
          open: false,
          id: "vid",
          type: "select",
          value: "Ширина см",
          childs: []
        },
        {
          title: "Рисунок",
          open: false,
          id: "vid",
          type: "select",
          value: "Рисунок",
          childs: []
        },
        {
          title: "Страна производителя",
          open: false,
          id: "vid",
          type: "select",
          value: "Страна производителя",
          childs: []
        },
        {
          title: "Цена(погонный метр)",
          open: false,
          id: "price",
          type: "inputs",
          value: [null, null],
          childs: []
        },
        {
          title: "Статус",
          open: false,
          id: "vid",
          type: "select",
          value: "Статус",
          childs: []
        },
        {
          title: "Характеристика",
          open: false,
          id: "vid",
          type: "select",
          value: "Характеристика",
          childs: []
        },
        {
          title: "Цвет",
          open: false,
          id: "vid",
          type: "select",
          value: "Цвет",
          childs: []
        },
        {
          title: "Состав",
          open: false,
          id: "vid",
          type: "select",
          value: "Состав",
          childs: []
        },
        {
          title: "Рапорт",
          open: false,
          id: "vid",
          type: "select",
          value: "Рапорт",
          childs: []
        },
        {
          title: "Направление рисунка",
          open: false,
          id: "vid",
          type: "select",
          value: "Направление рисунка",
          childs: []
        },
        {
          title: "Шаг",
          open: false,
          id: "vid",
          type: "select",
          value: "Шаг",
          childs: []
        },
        {
          title: "Вес гр/кв метр",
          open: false,
          id: "vid",
          type: "inputs",
          value: [null, null],
          childs: []
        }
      ],
      rubrics: [
        {
          id: 1,
          img: "/static/stat_product.jpg",
          title: "Классицизм"
        }
      ],
      categoryes: [
        {
          title: "Ткани",
          href: "/",
          insides: [
            {
              title: "Для штор",
              href: "/"
            },
            {
              title: "Для скатерти",
              href: "/"
            },
            {
              title: "Спец ткань",
              href: "/"
            },
            {
              title: "Пано",
              href: "/"
            }
          ]
        },
        {
          title: "Тюль",
          href: "/",
          insides: [
            {
              title: "Для штор",
              href: "/"
            },
            {
              title: "Для скатерти",
              href: "/"
            },
            {
              title: "Спец ткань",
              href: "/"
            },
            {
              title: "Пано",
              href: "/"
            }
          ]
        },
        {
          title: "Карнизы",
          href: "/",
          insides: [
            {
              title: "Для штор",
              href: "/"
            },
            {
              title: "Для скатерти",
              href: "/"
            },
            {
              title: "Спец ткань",
              href: "/"
            },
            {
              title: "Пано",
              href: "/"
            }
          ]
        },
        {
          title: "Аксессуары",
          href: "/",
          insides: [
            {
              title: "Для штор",
              href: "/"
            },
            {
              title: "Для скатерти",
              href: "/"
            },
            {
              title: "Спец ткань",
              href: "/"
            },
            {
              title: "Пано",
              href: "/"
            }
          ]
        },
        {
          title: "Готовые изделия",
          href: "/",
          insides: [
            {
              title: "Для штор",
              href: "/"
            },
            {
              title: "Для скатерти",
              href: "/"
            },
            {
              title: "Спец ткань",
              href: "/"
            },
            {
              title: "Пано",
              href: "/"
            }
          ]
        },
        {
          title: "Фурнитура",
          href: "/",
          insides: [
            {
              title: "Для штор",
              href: "/"
            },
            {
              title: "Для скатерти",
              href: "/"
            },
            {
              title: "Спец ткань",
              href: "/"
            },
            {
              title: "Пано",
              href: "/"
            }
          ]
        },
        {
          title: "Ковры",
          href: "/",
          insides: [
            {
              title: "Для штор",
              href: "/"
            },
            {
              title: "Для скатерти",
              href: "/"
            },
            {
              title: "Спец ткань",
              href: "/"
            },
            {
              title: "Пано",
              href: "/"
            }
          ]
        }
      ],
      last: [
        {
          price: 10000,
          title: "Название",
          type: "Тип",
          img: "/static/stat_product.jpg",
          sale: 0
        },
        {
          price: 10000,
          title: "Название",
          type: "Тип",
          img: "/static/stat_product.jpg",
          sale: 20
        },
        {
          price: 10000,
          title: "Название",
          type: "Тип",
          img: "/static/stat_product.jpg",
          sale: 20
        },
        {
          price: 10000,
          title: "Название",
          type: "Тип",
          img: "/static/stat_product.jpg",
          sale: 20
        },
        {
          price: 10000,
          title: "Название",
          type: "Тип",
          img: "/static/stat_product.jpg",
          sale: 20
        },
        {
          price: 10000,
          title: "Название",
          type: "Тип",
          img: "/static/stat_product.jpg",
          sale: 20
        }
      ]
    };
  },
  watch: {
    open_selects(newBool) {
      let main = document.getElementById("main"),
        z = "";
      if (newBool) {
        z = 11;
        main.style.zIndex = z;
      }
      setTimeout(() => (main.style.zIndex = z), 300);
    }
  },
  created() {
    this.categoryes = this.categoryes.map(x => {
      return { ...x, open: false };
    });
    this.categoryes[0].open = true;
    for (let i = 0; i < 30; i++)
      this.rubrics.push({
        ...this.rubrics[this.rubrics.length - 1],
        id: this.rubrics[this.rubrics.length - 1].id + 1
      });
    this.current_rubric = 30;
    this.$nextTick(() => {
      this.more = 0;
      let all_width = this.$refs["rubric-body"].clientWidth,
        current = 0;
      for (let i = 0; i < this.$refs["rubric"].length; i++) {
        current += this.$refs["rubric"][i].clientWidth + 28;
        if (current >= all_width) this.more++;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.sticky {
  top: 4rem;
}
nav {
  & > div {
    & > span {
      &:after {
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
    & > div {
      max-height: 0;
      overflow: hidden;
      transition: 0.3s;
    }
    &.active {
      & > span {
        &:after {
          transform: rotate(-135deg) translate(-1px, -2px);
        }
      }
      & > div {
        max-height: 40vh;
      }
    }
  }
}
.input {
  & > img {
    left: 19px;
  }
  & > input {
    border: 1px solid #929292;
  }
}
.rubric {
  & > .img {
    max-width: 93px;
    max-height: 93px;
    min-width: 93px;
    min-height: 93px;
    border-radius: 50%;
    overflow: hidden;
    & > img {
      max-width: 93px;
      max-height: 93px;
      min-width: 93px;
      min-height: 93px;
      transition: 0.3s;
    }
  }
  &.absolute {
    transform: translateX(-100%);
  }
  &:hover {
    & img {
      transform: scale(1.1);
    }
  }
  &:after {
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
  &.active {
    &:after {
      transform: rotate(45deg) translate(-22px, -26px) scale(1);
    }
  }
}
.filters {
  max-height: 70px;
  overflow: hidden;
  transition: 0.3s;
  &.active {
    max-height: 50vh;
  }
  & > * {
    margin-top: 6px;
    margin-right: 32px;
  }
}
.show_filters {
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-right: 1px solid #797979;
    border-bottom: 1px solid #797979;
    max-width: 12px;
    max-height: 12px;
    min-width: 12px;
    min-height: 12px;
    transform: rotate(45deg) translate(-1px, -2px);
    right: 7px;
    transition: 0.3s;
  }

  &.active {
    &:after {
      transform: rotate(45deg) translate(4px, 2px) scale(-1, -1);
    }
  }
}
.get_back {
  transition: 0.3s;
  &:hover {
    &:after {
      max-width: calc(100% + 5px);
      transform: skew(45deg) translate(-8%, 8px);
    }
  }
  &:before {
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
  &:after {
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
  & > span {
    transform: skew(-45deg);
    padding: relative;
    z-index: 1;
  }
}

@media (max-width: 1278px) {
  .filters {
    margin-left: -1rem;
    width: 100vw;
    max-height: unset;
    height: auto;
    overflow: visible;
    & > * {
      margin-right: 0;
    }
  }
  .selecter {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: 0.3s;
    &.open {
      opacity: 1;
      max-height: 200px;
    }
  }
  .select-title {
    &:after {
      content: "";
      display: block;
      position: absolute;
      border-right: 1px solid #797979;
      border-bottom: 1px solid #797979;
      max-width: 12px;
      max-height: 12px;
      min-width: 12px;
      min-height: 12px;
      transform: rotate(45deg) translate(-1px, -2px);
      right: 7px;
      transition: 0.3s;
    }

    &.open {
      &:after {
        transform: rotate(45deg) translate(4px, 2px) scale(-1, -1);
      }
    }
  }
  .filter-head {
    width: 100vw;
    margin-left: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .mob\:fixed {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding: 0 1rem;
    z-index: 10;
    background-color: white;
    transform: translateX(-100%);
    transition: 0.3s;
    &.active {
      transform: translateX(0);
    }
  }
  .opacity-0 {
    opacity: 1;
  }
  .gallery {
    min-height: 170px;
    width: calc(100vw - 1rem);
    overflow-x: auto;
    & .overflow-hidden {
      overflow: visible;
    }
  }
  .text-center {
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #000000;
    opacity: 0.3;
  }
  button.w-full {
    width: 100vw;
    margin-left: -1rem;
  }
}
</style>
