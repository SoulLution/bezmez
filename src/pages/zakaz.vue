<template>
  <div class="w-full">
    <div class="content flex jc-fe">
      <div class="flex col mob:none w-4/5 mob:w-full">
        <div class="input w-full flex jc-fs ai-center">
          <img class="absolute z-1" src="/static/search.svg" alt="" />
          <input
            class="w-full pl-10 pr-2 py-4"
            type="search"
            name="bezmez-search"
            v-model="search"
          />
        </div>
      </div>
    </div>
    <div class="flex w-full b-solid border-C4 b-0 bb-1 mt-15 pb-11">
      <div class="content">
        <h1 class="text-40 mob:36 font-400 my-0">Оформление заказа</h1>
      </div>
    </div>
    <div class="content flex col pt-17">
      <div class="flex row mob:col w-full ai-fs pt-4">
        <div class="flex col w-2/3 mob:w-full pr-15 mob:px-0">
          <template v-for="product in products">
            <div class="product flex row w-full jc-sb my-8" :key="product.id">
              <div class="flex row h-full w-1/2 mob:w-full">
                <img class="mr-10 mob:mr-4 h-full" :src="product.img" />
                <div
                  class="flex col ai-fs py-4 h-full jc-fs mob:jc-sb mob:py-0"
                >
                  <h3 class="text-24 my-0 mb-4">{{ product.title }}</h3>
                  <span class="color-grey lh-21"
                    >{{ product.about }} {{ product.color }}</span
                  >
                  <div class="none mob:flex row">
                    <v-amount-z
                      v-model="product.current"
                      :max="
                        product.store.reduce((prev, x) => {
                          return prev + x.value;
                        }, 0)
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="flex mob:none row">
                <v-amount-z
                  v-model="product.current"
                  :max="
                    product.store.reduce((prev, x) => {
                      return prev + x.value;
                    }, 0)
                  "
                />
              </div>
            </div>
          </template>
        </div>
        <div
          class="flex mob:none col sticky py-7 pr-9 mob:px-4 pl-13 w-1/3 mob:w-full b-solid border-C4 b-1 mob:bx-0  ai-fs"
        >
          <h3 class="flex jc-sb text-24 w-full">
            <span>Итого:</span><span>{{ calcPrice + dilevery }} тенге</span>
          </h3>
          <div class="flex col w-full color-grey">
            <div class="flex w-full jc-sb mt-3" v-if="calcCurrent">
              <span>{{ calcCurrent }}шт товары</span
              ><span>{{ calcPrice }} тенге</span>
            </div>
            <!-- <div class="flex w-full jc-sb mt-3">
              <span>Скидка</span><span> тенге</span>
            </div> -->
            <div class="flex w-full jc-sb mt-3">
              <span>Доставка</span><span>{{ dilevery }} тенге</span>
            </div>
          </div>
          <p class="mt-8">Выберите способ оплаты:</p>
          <div class="flex row mob:col mob:ai-fs jc-sb w-full">
            <template v-for="(pay, i) in payes">
              <label
                class="cursor-pointer mob:mb-6 mob:flex mob:ai-center"
                :key="pay"
              >
                <input
                  type="radio"
                  :value="i"
                  :checked="pay_value === i"
                  @change="pay_value = i"
                />
                {{ pay }}
              </label>
            </template>
          </div>
          <button
            class="good text-20 mt-10 bg-l_black border-l_black color-white cursor-pointer py-3 mob:py-7 w-full radius-5 hover:color-l_black hover:bg-white"
          >
            Оплатить заказ
          </button>
        </div>
      </div>

      <form class="flex row jc-fs ai-fs flex-wrap w-full">
        <div class="flex col w-1/2 mob:w-full mob:px-0 ai-fs pr-6">
          <span class="color-grey text-18 mb-4 mt-9">ФИО *</span>
          <input
            class="w-full px-6 py-4"
            placeholder="Введите ваше ФИО ..."
            name="name"
            type="text"
          />
        </div>
        <div class="flex col w-1/2 mob:w-full mob:px-0 ai-fs pl-6">
          <span class="color-grey text-18 mb-4 mt-9">Телефон *</span>
          <input
            class="w-full px-6 py-4"
            placeholder="+7 (000) 000 - 00 - 00"
            v-mask="'+7 (###) ### - ## - ##'"
            v-model="form.phone"
            name="phone"
            type="text"
          />
        </div>
        <div class="flex col w-1/2 mob:w-full mob:px-0 ai-fs pr-6">
          <span class="color-grey text-18 mb-4 mt-9">Email*</span>
          <input
            class="w-full px-6 py-4"
            placeholder="bezmez@mail.ru ..."
            name="email"
            type="email"
          />
        </div>
        <div class="flex col w-1/2 mob:w-full mob:px-0 ai-fs pl-6">
          <span class="color-grey text-18 mb-4 mt-9">Почтовый индекс *</span>
          <input
            class="w-full px-6 py-4"
            placeholder="00000 ..."
            name="index"
            type="text"
          />
        </div>
        <div class="flex col w-1/2 mob:w-full mob:px-0 ai-fs pr-6">
          <span class="color-grey text-18 mb-4 mt-9">Город *</span>
          <input
            class="w-full px-6 py-4"
            placeholder="Алматы ..."
            name="city"
            type="text"
          />
        </div>
        <div class="flex col w-1/2 mob:w-full mob:px-0 ai-fs pl-6">
          <span class="color-grey text-18 mb-4 mt-9">Адрес *</span>
          <input
            class="w-full px-6 py-4"
            placeholder="Абая 34Б ..."
            name="address"
            type="text"
          />
        </div>
        <div
          class="flex row mob:col w-1/2 mob:w-full mob:px-0 pr-6 jc-fs mt-20 mob:mt-12"
        >
          <button
            class="good text-20 mt-4 bg-l_black border-l_black color-white cursor-pointer py-3 mob:py-7 mob:w-9/10 px-6 radius-5 hover:color-l_black hover:bg-white"
          >
            Сохранить данные
          </button>
          <button
            class="text-20 mt-4 ml-8 mob:mx-0 b-0 bb-1 b-dashed cursor-pointer border-C4 color-C4 hover:border-margon hover:color-margon bg-white"
          >
            Сбросить
          </button>
        </div>
      </form>

      <div
        class="none mob:flex col sticky py-7 pr-9 mob:px-4 pl-13 w-1/3 mob:w-full b-solid border-C4 b-1 mob:bx-0  ai-fs"
      >
        <h3 class="flex jc-sb text-24 w-full">
          <span>Итого:</span><span>{{ calcPrice + dilevery }} тенге</span>
        </h3>
        <div class="flex col w-full color-grey">
          <div class="flex w-full jc-sb mt-3" v-if="calcCurrent">
            <span>{{ calcCurrent }}шт товары</span
            ><span>{{ calcPrice }} тенге</span>
          </div>
          <!-- <div class="flex w-full jc-sb mt-3">
            <span>Скидка</span><span> тенге</span>
          </div> -->
          <div class="flex w-full jc-sb mt-3">
            <span>Доставка</span><span>{{ dilevery }} тенге</span>
          </div>
        </div>
        <p class="mt-8">Выберите способ оплаты:</p>
        <div class="flex row mob:col mob:ai-fs jc-sb w-full">
          <template v-for="(pay, i) in payes">
            <label
              class="cursor-pointer mob:mb-6 mob:flex mob:ai-center"
              :key="pay"
            >
              <input
                type="radio"
                :value="i"
                :checked="pay_value === i"
                @change="pay_value = i"
              />
              {{ pay }}
            </label>
          </template>
        </div>
        <button
          class="good text-20 mt-10 bg-l_black border-l_black color-white cursor-pointer py-3 mob:py-7 w-full radius-5 hover:color-l_black hover:bg-white"
        >
          Оплатить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      products: [
        {
          id: "1/1",
          title: "Название",
          price: 100,
          sale: 20,
          about: "Ткaнь прочная, износостойкая. Без ПУ покрытия.",
          color: "Оранжевый",
          store: [
            {
              key: "Турция",
              value: 10
            },
            {
              key: "Алматы",
              value: 100
            },
            {
              key: "Иран",
              value: 1
            }
          ],
          current: 0,
          img: "/static/orange.png"
        },
        {
          id: "1/2",
          title: "Название",
          price: 201,
          about: "Ткaнь прочная, износостойкая. Без ПУ покрытия.",
          color: "Синий",
          store: [
            {
              key: "Турция",
              value: 10
            },
            {
              key: "Алматы",
              value: 0
            }
          ],
          current: 0,
          img: "/static/blue.png"
        }
      ],
      dilevery: 1200,
      payes: ["Карта", "При получении наличными"],
      pay_value: null,
      form: {
        phone: ""
      }
    };
  },
  computed: {
    calcPrice() {
      let result = 0;
      this.products.forEach(x => {
        let price;
        if (x.sale) price = x.price - x.price * (x.sale / 100);
        else price = x.price;
        result += x.current * price;
      });
      return result;
    },
    calcCurrent() {
      let result = 0;
      this.products.forEach(x => {
        result += x.current;
      });
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  height: 145px;
}
.input {
  & > img {
    left: 19px;
  }
  & > input {
    border: 1px solid #929292;
  }
}
.lh-21 {
  line-height: 21px;
}
.sticky {
  top: 1rem;
}

input[type="radio"] {
  // height: 0;
  width: 0;
  position: relative;
  margin: 0;
  margin-right: 24px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    max-width: 18px;
    max-height: 18px;
    min-width: 18px;
    min-height: 18px;
    border-radius: 50%;
    border: 1px solid $margon;
    opacity: 0.5;
    cursor: pointer;
    transition: 0.3s;
  }
  &:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 5px;
    max-width: 10px;
    max-height: 10px;
    min-width: 10px;
    min-height: 10px;
    border-radius: 50%;
    background-color: $margon;
    transform: scale(0);
    cursor: pointer;
    transition: 0.3s;
  }
  &:checked {
    &:before {
      opacity: 1;
    }
    &:after {
      transform: scale(1);
    }
  }
}
button.good {
  transition: 0.3s;
  box-shadow: 0 0 40px 40px $l_black inset, 0 0 0 0 $l_black;
  &:hover {
    box-shadow: 0 0 10px 0 $l_black inset, 0 0 10px 5px $l_black;
  }
}
form {
  & input {
    border-radius: 3px;
    border: 1px solid #00000045;
  }
}

@media (max-width: 1278px) {
  .sticky {
    width: 100vw;
  }
  form {
    width: 100vw !important;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 60px;
    border-top: 1px solid #00000045;
  }
  input[type="radio"] {
    margin-right: 60px;
    margin-bottom: 35px;
    &:before {
      max-width: 46px;
      max-height: 46px;
      min-width: 46px;
      min-height: 46px;
    }
    &:after {
      top: 12px;
      left: 12px;
      max-width: 24px;
      max-height: 24px;
      min-width: 24px;
      min-height: 24px;
    }
  }
}
</style>
