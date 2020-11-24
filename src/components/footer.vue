<template>
  <footer>
    <div class="content flex col text-18 mt-20 mob:mt-6 mob:pb-4">
      <div class="flex row mob:col jc-sb ai-fs w-full">
        <div class="flex col color-grey ai-fs w-1/6 mob:w-full">
          <h3
            class="color-black text-22"
            @click="menu = !menu"
            :class="{ active: menu }"
          >
            Меню
          </h3>
          <div
            class="flex col color-grey ai-fs w-full do_open"
            :class="{ active: menu }"
          >
            <div class="flex row w-full">
              <router-link class="w-1/2 mb-4" to="/">Партнерам</router-link>
              <router-link class="w-1/2 mb-4" to="/">Поиск</router-link>
            </div>
            <div class="flex row w-full">
              <router-link class="w-1/2 mb-4" to="/">Доставка</router-link>
              <router-link class="w-1/2 mb-4" to="/">Аккаут</router-link>
            </div>
            <div class="flex row w-full">
              <router-link class="w-1/2 mb-4" to="/">FAQ</router-link>
              <router-link class="w-1/2 mb-4" to="/">Избранное</router-link>
            </div>
            <div class="flex row w-full">
              <router-link class="w-1/2 mb-4" to="/">Контакты</router-link>
              <router-link class="w-1/2 mb-4" to="/">Корзина</router-link>
            </div>
          </div>
        </div>
        <div class="flex col color-grey ai-fs">
          <h3
            class="color-black text-22"
            @click="contacts = !contacts"
            :class="{ active: contacts }"
          >
            Контакты
          </h3>
          <div
            class="flex col color-grey ai-fs do_open"
            :class="{ active: contacts }"
          >
            <a class="mb-4">г. Алматы, ул Кабдолова 16/1</a>
            <a class="mb-4" href="tel:+7 707 511 00 00">+7 707 511 00 00</a>
            <a class="mb-4" href="email:info@bezmez.kz"
              >email: info@bezmez.kz</a
            >
          </div>
        </div>
        <div class="flex col ai-fs">
          <h3
            class="category flex ai-center jc-fs pr-9 color-black text-22"
            @click="category = !category"
            :class="{ active: category }"
          >
            Категории
          </h3>

          <nav
            class="flex col ai-fs text-18 jc-fs do_open"
            :class="{ active: category }"
          >
            <template v-for="(cat, i) in categoryes">
              <div
                class="link flex col jc-fs ai-fs font-600 cursor-pointer mb-4 color-d_black"
                :class="{ active: cat.open }"
                :key="i"
                @click="cat.open = !cat.open"
                @dblclick="$router.push(cat.href)"
              >
                <span class="flex pr-6">{{ cat.title }}</span>
                <div class="flex col mt-1 ai-fs pl-2 color-grey font-400">
                  <template v-for="(inside, j) in cat.insides">
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
        <div class="flex col">
          <h3 class="flex mob:none ai-center jc-fs pr-9 color-grey text-20">
            <img src="/static/rus.png" class="mr-4" />
            Россия/РУБ
          </h3>
          <span
            class="color-black mob:none b-0 bb-2 b-solid border-black font-500"
            >Стать партнером</span
          >
          <div class="flex col mt-20 mob:mt-0 ai-fs w-full">
            <h3
              class="color-black none mob:flex text-22"
              :class="{ active: links }"
              @click="links = !links"
            >
              Мы в соц сетях
            </h3>
            <div class="flex row opacity-30 do_open" :class="{ active: links }">
              <img class="mr-4" src="/static/001-facebook.png" alt="" />
              <img class="mr-4" src="/static/001-instagram.png" alt="" />
              <img class="mr-4" src="/static/001-youtube.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex col mt-12 mob:mt-0 ai-fs w-full">
        <h3
          class="color-black none mob:flex text-22 mb-0"
          :class="{ active: payment }"
          @click="payment = !payment"
        >
          Способы оплаты
        </h3>
        <div
          class="flex row jc-fs ai-fs w-full do_open"
          :class="{ active: payment }"
        >
          <img class="mr-4" src="/static/visa.png" alt="" />
          <img class="mr-4" src="/static/american-express.png" alt="" />
          <img class="mr-4" src="/static/unionpay.png" alt="" />
          <img class="mr-4" src="/static/paypal.png" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      contacts: false,
      category: false,
      links: false,
      payment: false,
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
      ]
    };
  },
  created() {
    this.categoryes = this.categoryes.map(x => {
      return { ...x, open: false };
    });
    this.categoryes[0].open = true;
  }
};
</script>

<style lang="scss" scoped>
.category {
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    max-width: 12px;
    max-height: 12px;
    min-width: 12px;
    min-height: 12px;
    transform: rotate(45deg) translate(-1px, -2px);
    right: 7px;
    transition: 0.3s;
  }
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

nav.do_open {
  max-height: 0;
  transition: 0.3s;
  overflow: hidden;
  &.active {
    max-height: 300vh;
  }
}
@media (max-width: 1278px) {
  h3 {
    display: flex;
    padding-right: 2.25rem;
    padding-top: 28px;
    justify-content: flex-start;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: -1rem;
      height: 1px;
      width: 100vw;
      background-color: #00000020;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      max-width: 12px;
      max-height: 12px;
      min-width: 12px;
      min-height: 12px;
      transform: rotate(45deg) translate(-1px, -2px);
      right: 7px;
      transition: 0.3s;
    }
    &.active:after {
      transform: rotate(45deg) translate(-1px, -2px) scale(-1, -1);
    }
  }
  .do_open {
    max-height: 0;
    transition: 0.3s;
    overflow: hidden;
    &.active {
      max-height: 50vh;
    }
  }
  nav.do_open.active {
    max-height: 300vh;
  }
}
</style>
