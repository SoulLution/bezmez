<template>
  <div class="popup fixed bg-white mob:col flex jc-center mob:jc-fs ai-fs z-11">
    <v-header class="none mob:flex" />
    <div class="popup-content w-full jc-fs col">
      <div class="flex row mob:col w-full ai-fs">
        <div
          class="galerry flex col w-1/2 mob:w-full"
          style="margin-right: 50px;"
        >
          <div
            class="absolute mob:block none"
            style="z-index: 1; left: 0rem"
            @click="
              changeCurrentImage(
                current_image - 1 < 0
                  ? product.colors[current_color].images.length - 1
                  : current_image - 1
              )
            "
          >
            <svg
              width="59"
              height="118"
              viewBox="0 0 59 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cy="59" r="59" fill="white" />
              <path
                d="M30.0833 57.5501H11.7963L18.7987 50.638C19.1654 50.2761 19.1796 49.6747 18.8303 49.2947C18.4815 48.9152 17.9013 48.9 17.5342 49.262L9.53717 57.1564C9.19112 57.5155 9 57.9923 9 58.5001C9 59.0074 9.19112 59.4848 9.55321 59.8595L17.5346 67.7378C17.712 67.9131 17.9393 68 18.1667 68C18.4087 68 18.6507 67.9012 18.8308 67.705C19.18 67.325 19.1658 66.7242 18.7992 66.3622L11.7674 59.4501H30.0833C30.5893 59.4501 31 59.0245 31 58.5001C31 57.9757 30.5893 57.5501 30.0833 57.5501Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            class="absolute mob:block none"
            style="z-index: 1; right: 0"
            @click="
              changeCurrentImage(
                current_image + 1 >= product.colors[current_color].images.length
                  ? 0
                  : current_image + 1
              )
            "
          >
            <svg
              width="59"
              height="118"
              viewBox="0 0 59 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="59" cy="59" r="59" fill="white" />
              <path
                d="M28.9167 57.5501H47.2037L40.2013 50.638C39.8346 50.2761 39.8204 49.6747 40.1697 49.2947C40.5185 48.9152 41.0987 48.9 41.4658 49.262L49.4628 57.1564C49.8089 57.5155 50 57.9923 50 58.5001C50 59.0074 49.8089 59.4848 49.4468 59.8595L41.4654 67.7378C41.288 67.9131 41.0607 68 40.8333 68C40.5913 68 40.3493 67.9012 40.1692 67.705C39.82 67.325 39.8342 66.7242 40.2008 66.3622L47.2326 59.4501H28.9167C28.4107 59.4501 28 59.0245 28 58.5001C28 57.9757 28.4107 57.5501 28.9167 57.5501Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="img w-full">
            <img
              :src="product.colors[current_color].images[current_image]"
              style="max-height: 660px"
            />
          </div>
          <div class="slides w-full flex row jc-fs mob:none">
            <template v-for="(src, i) in product.colors[current_color].images">
              <div
                class="slide h-full mr-7 cursor-pointer"
                :class="{ active: current_image === i }"
                @click="current_image = i"
                :key="i"
              >
                <img :src="src" />
              </div>
            </template>
          </div>
          <div class="w-full flex col jc-fs ai-fs mt-12 mob:none">
            <h2 class="text-25 color-d_black">Все цвета</h2>
            <div class="colors w-full flex row jc-fs">
              <template v-for="(src, i) in product.colors">
                <div
                  class="slide h-full mr-7 cursor-pointer"
                  :class="{ active: current_color === i }"
                  @click="
                    current_color = i;
                    current_image = 0;
                  "
                  :key="i"
                >
                  <img :src="src.images[0]" />
                </div>
              </template>
            </div>
          </div>
        </div>

        <div class="flex col w-1/2 mob:w-full ai-fs">
          <div class="flex row w-full jc-sb">
            <h1 class="text-45">{{ product.title }}</h1>
            <svg
              width="20"
              @click="$router.go(-1)"
              class="cursor-pointer mob:none"
              style="margin-top: -24px"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="1"
                width="25"
                height="2"
                transform="rotate(45 2 1)"
                fill="#0E0E0E"
              />
              <rect
                width="25"
                height="2"
                transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.32227 19.6777)"
                fill="#0E0E0E"
              />
            </svg>
          </div>
          <p class="color-grey my-0 text-18">Цена за {{ product.for_whaat }}</p>
          <p class="color-grey my-0 text-18 mt-1">
            от
            <strong class="color-black text-22">{{ product.min_price }}</strong>
          </p>
          <div class="flex row mob:col mt-20 mob:mt-6 ai-fs">
            <div class="flex col ai-fs color-grey text-18 mr-10">
              <span class="mb-2">Цвет</span>
              <v-color-select
                :options="product.colors"
                value_name="title"
                :value="product.colors[0]"
                v-model="current_color"
              />
            </div>
            <div class="flex col ai-fs color-grey mob:mt-6 text-18">
              <span class="mb-2">Количество</span>
              <v-amount
                class="mob:jc-fs"
                v-model="product.colors[current_color].current"
                :max="
                  product.colors[current_color].store.reduce((prev, x) => {
                    return prev + x.value;
                  }, 0)
                "
              />
            </div>
          </div>
          <button
            class="text-20 mt-10 bg-l_black border-l_black color-white cursor-pointer py-3 mob:py-7 px-30 mob:px-0 mob:w-full radius-5 hover:color-l_black hover:bg-white"
          >
            Добавить в корзину
          </button>
          <span class="text-12 opacity-30 mt-2 mob:none"
            >Последняя покупка: 10 минут назад</span
          >

          <div class="flex row mob:col ai-fs mt-6">
            <div class="flex col w-1/2 mob:w-full ai-fs pr-15 mob:px-0">
              <h3 class="text mob:text-22 color-d_black mb-5">
                Характеристики
              </h3>
              <div class="flex row w-full jc-sb flex-wrap">
                <template v-for="(character, i) in product.characters">
                  <div
                    class="character flex row jc-sb w-1/2 mob:w-auto text-14 mb-4"
                    :key="i"
                  >
                    <span class="color-grey mob:mr-2">{{ character.key }}</span>
                    <div>{{ character.value }}</div>
                  </div>
                </template>
              </div>
            </div>

            <div
              class="flex col w-1/2 mob:w-full pl-20 mob:px-0 jc-fs b-solid border-C4 bl-1 mob:bl-0 b-0"
              style="min-height: 660px"
            >
              <div
                class="flex col w-full ai-fs b-dashed mob:bb-0 border-C4 bb-2 b-0 pb-4"
              >
                <h3 class="text mob:text-22 color-d_black mb-5">
                  Наличие на складах
                </h3>
                <div class="flex row w-full jc-sb flex-wrap">
                  <template
                    v-for="(store, i) in product.colors[current_color].store"
                  >
                    <div
                      class="character flex row jc-sb w-1/2 mob:w-full mob:jc-fs text-14 mb-4"
                      :key="i"
                    >
                      <span>{{ store.key }}</span>
                      <div class="color-grey mob:none">{{ store.value }}</div>
                      <div class="color-grey ml-2 none mob:block">
                        {{ store.value ? "В наличии" : "Нет в наличии" }}
                      </div>
                    </div>
                  </template>
                </div>
              </div>
              <div class="flex col w-full jc-fs ai-fs">
                <h3 class="text mob:text-22 color-d_black mt-1 mb-5">
                  Описание
                </h3>
                <span
                  class="opacity-76 mob:opacity"
                  style="line-height: 21px;"
                  >{{ product.about }}</span
                >
              </div>
              <div class="flex col w-full ai-fs">
                <h3 class="text mob:text-22 color-d_black mb-5">
                  Все товары раздела
                </h3>
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

      <v-product-list class="similars" :list="similars" />
      <v-partner class="mt-40 mob:mt-12 px mob:col-reverse" />
    </div>
    <v-footer class="none mob:flex" />
  </div>
</template>

<script>
import vProductList from "@/components/similars";
import vHeader from "@/components/header";
import vFooter from "@/components/footer";
export default {
  components: { vProductList, vHeader, vFooter },
  data() {
    return {
      current_color: 0,
      current_image: 0,
      product: {
        min_price: 201,
        for_whaat: "метр",
        title: "Название",
        about:
          "Ткaнь прочная, износостойкая. Широко используются для изготовления верхней одежды, рюкзаков, обуви, снаряжения и рабочей одежды. Без ПУ покрытия.",
        colors: [
          {
            title: "Оранжевый",
            price: 201,
            store: [
              {
                key: "Турция",
                value: 10
              },
              {
                key: "Алматы",
                value: 100
              }
            ],
            current: 0,
            images: ["/static/orange.png", "/static/partner.png"]
          },
          {
            title: "Синий",
            price: 202,
            store: [
              {
                key: "Турция",
                value: 0
              },
              {
                key: "Алматы",
                value: 0
              }
            ],
            current: 0,
            images: ["/static/blue.png"]
          }
        ],
        characters: [
          {
            key: "Состав",
            value: "100% п/э"
          },
          {
            key: "Состав",
            value: "100% п/э"
          },
          {
            key: "Цвет",
            value: "Оранжевый"
          },
          {
            key: "Цвет",
            value: "Оранжевый"
          },
          {
            key: "Состав",
            value: "100% п/э"
          },
          {
            key: "Состав",
            value: "100% п/э"
          },
          {
            key: "Цвет",
            value: "Оранжевый"
          },
          {
            key: "Цвет",
            value: "Оранжевый"
          },
          {
            key: "Состав",
            value: "100% п/э"
          },
          {
            key: "Состав",
            value: "100% п/э"
          },
          {
            key: "Цвет",
            value: "Оранжевый"
          },
          {
            key: "Цвет",
            value: "Оранжевый"
          }
        ]
      },
      similars: [
        {
          link: "/",
          title: "Красный",
          img: "/static/partner.png"
        },
        {
          link: "/",
          title: "Красный",
          img: "/static/partner.png"
        },
        {
          link: "/",
          title: "Красный",
          img: "/static/partner.png"
        },
        {
          link: "/",
          title: "Красный",
          img: "/static/partner.png"
        },
        {
          link: "/",
          title: "Красный",
          img: "/static/partner.png"
        },
        {
          link: "/",
          title: "Красный",
          img: "/static/partner.png"
        }
      ]
    };
  },
  methods: {
    changeCurrentImage(index) {
      this.current_image = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.character:nth-child(odd) {
  padding-right: 12.5px;
}
.character:nth-child(even) {
  padding-left: 12.5px;
}
button {
  transition: 0.3s;
  box-shadow: 0 0 40px 40px $l_black inset, 0 0 0 0 $l_black;
  &:hover {
    box-shadow: 0 0 10px 0 $l_black inset, 0 0 10px 5px $l_black;
  }
}
.popup {
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  padding-bottom: 55px;
  overflow: auto;
  &-content {
    padding: 55px;
  }
}
img {
  width: 100%;
  height: 100%;
}
.slides {
  height: 100px;
  & > .slide {
    width: 80px;
    padding-bottom: 5px;
    &:after {
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
    &:hover {
      &:after {
        @extend .bg-grey;
        max-width: 35%;
      }
    }
    &.active {
      &:after {
        max-width: 100%;
      }
    }
  }
}
.colors {
  height: 240px;
  & > .slide {
    width: 184px;
    padding: 8px;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      max-width: 0;
      max-height: 0;
      border-width: 0;
      transition: 0.3s;
    }
    &:before {
      // border-left: 1px solid $d_grey;
      // border-bottom: 1px solid $d_grey;
      left: -1px;
      bottom: -1px;
    }
    &:after {
      // border-right: 1px solid $d_grey;
      // border-top: 1px solid $d_grey;
      right: -1px;
      top: -1px;
    }
    &:hover {
      &:before {
        border-left: 1px solid $d_grey;
        border-bottom: 1px solid $d_grey;
      }
      &:after {
        border-right: 1px solid $d_grey;
        border-top: 1px solid $d_grey;
      }
      &:before,
      &:after {
        @extend .border-grey;
        max-width: 35%;
        max-height: 35%;
      }
    }
    &.active {
      &:before {
        border-left: 1px solid $d_grey;
        border-bottom: 1px solid $d_grey;
      }
      &:after {
        border-right: 1px solid $d_grey;
        border-top: 1px solid $d_grey;
      }
      &:before,
      &:after {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
@media (max-width: 1278px) {
  .popup {
    &-content {
      padding: 40px;
      padding-top: 0;
    }
  }
  .text {
    border-top: 1px solid #00000020;
    border-bottom: 1px solid #00000020;
    width: 100vw;
    margin-left: -40px;
    padding: 28px 40px;
  }
  .galerry {
    width: 100vw;
    margin-left: -40px;
  }
  .character:nth-child(even) {
    padding-left: 0;
  }
  .similars {
    width: calc(100vw - 40px);
    margin-left: -20px;
  }
  .mob\:col-reverse {
    width: 100vw !important;
    margin-left: -40px;
    margin-right: 0;
  }
  .border-C4 {
    min-height: 0 !important;
  }
}
</style>
