<template>
  <div>
    <div class="content flex jc-fs ai-fs col">
      <div class="input w-full flex jc-fs ai-center mob:none">
        <img class="absolute z-1" src="/static/search.svg" alt="" />
        <input
          class="w-full pl-10 pr-2 py-4 border-grey radius-5"
          type="search"
          name="bezmez-search"
          placeholder="Введите запрос для поиска"
          v-model="search"
        />
      </div>
      <div class="flex col ai-fs w-full">
        <h2 class="text-40 mob:text-36" style="line-height: 150%">
          Часто задаваемые вопросы
        </h2>
        <div class="flex col">
          <template v-for="(category, i) in categoryes">
            <div class="flex col ai-fs" :key="i">
              <h3 class="text-36 mob:text-30">{{ category.title }}</h3>
              <div class="flec col ai-fs">
                <template v-for="(quest, j) in category.questions">
                  <div class="flex col ai-fs" :key="j">
                    <label class="text-20 cursor-pointer">
                      <input
                        type="radio"
                        :value="i + '-' + j"
                        :checked="open === i + '-' + j"
                        @change="open = i + '-' + j"
                      />{{ quest.title }}</label
                    >
                    <span
                      class="answer pl-6 mt-2 mb-4"
                      :class="{ active: open === i + '-' + j }"
                      >{{ quest.answer }}</span
                    >
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>

      <v-partner class="mt-40 mob:mt-12 px mob:col-reverse" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      open: "0-0",
      categoryes: [
        {
          title: "Регистрация",
          questions: [
            {
              title: "Зачем нужна регистрация?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            },
            {
              title: "Какой тип регистрации выбрать?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            },
            {
              title: "Как восстановить пароль от личного кабинета?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            }
          ]
        },
        {
          title: "Регистрация",
          questions: [
            {
              title: "Зачем нужна регистрация?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            },
            {
              title: "Какой тип регистрации выбрать?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            },
            {
              title: "Как восстановить пароль от личного кабинета?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            }
          ]
        },
        {
          title: "Регистрация",
          questions: [
            {
              title: "Зачем нужна регистрация?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            },
            {
              title: "Какой тип регистрации выбрать?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            },
            {
              title: "Как восстановить пароль от личного кабинета?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            }
          ]
        },
        {
          title: "Регистрация",
          questions: [
            {
              title: "Зачем нужна регистрация?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            },
            {
              title: "Какой тип регистрации выбрать?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            },
            {
              title: "Как восстановить пароль от личного кабинета?",
              answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque tenetur explicabo, molestias ab consequatur modi quasi voluptate aspernatur et."
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.input {
  & > img {
    left: 19px;
  }
  & > input {
    border: 1px solid #929292;
  }
}
input[type="radio"] {
  width: 0;
  position: relative;
  margin: 0;
  margin-right: 24px;
  margin-top: -12px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: -4px;
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
    top: 1px;
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
.answer {
  max-height: 0;
  overflow: hidden;
  transition: 0.3s;
  &.active {
    transition: 0.45s;
    max-height: 200px;
  }
}

@media (max-width: 1278px) {
  .mob\:col-reverse {
    width: 100vw !important;
    margin-left: -1rem;
    margin-right: 0;
  }
}
</style>
