<template>
  <div
    class="popup fixed flex jc-center ai-center z-15"
    :class="{ hidden: !registrate }"
  >
    <div
      class="popup-bg absolute h-full w-full"
      @click="$store.dispatch('show/setRegistrate', false)"
    ></div>
    <div class="popup-content mob:flex mob:col mob:jc-fs mob:ai-fs bg-white">
      <v-header class="none mob:flex" />
      <h2 class="text-48 mob:text-36 mob:mt-12 text-center mt-0">
        Регистрация
      </h2>
      <form class="flex col w-full pb-10 b-0 bb-1 b-solid border-C4">
        <div class="flex row w-full">
          <input type="text" name="name" placeholder="Введите ФИО ..." />
        </div>
        <div class="flex row w-full">
          <input
            type="text"
            name="phone"
            placeholder="Введите ваш телефонный номер ..."
            v-model="phone"
            v-mask="'+7 (###) ###-####'"
          />
        </div>
        <div class="flex row w-full">
          <select>
            <option value="0" selected="selected" disabled
              >Выберите город</option
            >
          </select>
        </div>
        <div class="flex row w-full">
          <input
            type="email"
            name="email"
            placeholder="Введите ваш email ...."
          />
        </div>
        <div class="flex row mob:col w-full">
          <input
            type="password"
            class="password w-full"
            placeholder="Введите ваш пароль ..."
          />
          <div class="w-1/5"></div>
          <input
            type="password"
            class="password w-full"
            placeholder="Повторите пароль ..."
          />
        </div>
        <div class="flex row mob:col jc-fs w-full">
          <button
            class="good mob:w-9/10 text-20 mob:text-16 mt-4 bg-l_black border-l_black color-white cursor-pointer py-3 mob:py-7 px-6 radius-5 hover:color-l_black hover:bg-white"
          >
            Зарегистрироваться
          </button>
          <button
            class="text-20 mt-4 ml-8 mob:mx-0 b-0 bb-1 b-dashed cursor-pointer border-C4 color-C4 hover:border-margon hover:color-margon bg-white"
          >
            Сбросить
          </button>
        </div>
      </form>
      <div class="flex w-full col ai-fs">
        <p class="pl-10 color-grey mb-10">Через соц сети</p>
        <div class="flex w-full row mob:col flex-wrap jc-sb">
          <button class="button_link vk">
            <img src="/static/vk.png" />
            Вконтакте
          </button>
          <button class="button_link fb">
            <img src="/static/fb.png" />
            Facebook
          </button>
          <button class="button_link oc">
            <img src="/static/oc.png" />
            Одноклассники
          </button>
        </div>
        <div class="flex w-full row flex-wrap">
          <button class="button_link g+">
            <img src="/static/g+.png" />
            Google +
          </button>
        </div>
      </div>
      <v-footer class="none mob:flex" />
    </div>
  </div>
</template>

<script>
import vHeader from "@/components/header";
import vFooter from "@/components/footer";
export default {
  components: { vHeader, vFooter },
  data() {
    return {
      phone: ""
    };
  },
  computed: {
    registrate() {
      return this.$store.getters["show/getRegistrate"];
    }
  },
  watch: {
    registrate(newBool) {
      // let overflow = 'auto'
      // if(newBool)
      //   overflow = 'hidden'
      //   console.log( document.getElementsByTagName('html')[0])
      // document.getElementsByTagName('html')[0].style.overflowY = overflow
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  &-bg {
    background-color: #00000056;
  }
  &-content {
    overflow: auto;
    max-height: 90%;
    height: 100%;
    width: 90%;
    max-width: 814px;
    padding: 1rem 70px 1rem;
  }
}
input,
select {
  width: 100%;
  margin-bottom: 30px;
  padding: 1rem 40px;
  border-radius: 5px;
  border: 0.5px solid #00000056;
  outline: none;
  &:focus {
    border: 0.5px solid #000000;
  }
  &::placeholder {
    color: #00000040;
  }
  &.password {
    background-repeat: no-repeat;
    background-position: calc(100% - 16px) 50%;
    background-image: URL("/static/eye.png");
  }
}
button.good {
  transition: 0.3s;
  box-shadow: 0 0 40px 40px $l_black inset, 0 0 0 0 $l_black;
  &:hover {
    box-shadow: 0 0 10px 0 $l_black inset, 0 0 10px 5px $l_black;
  }
}

.button_link {
  width: 100%;
  max-width: 202px;
  margin-bottom: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  outline: none;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
  }
  & > img {
    position: absolute;
    left: 1rem;
  }
}
.vk {
  color: white;
  background-color: #4c75a3;
  border: 1px solid #4c75a3;
  &:hover {
    background-color: #8cc2ff;
  }
}
.fb {
  color: white;
  background-color: #3b579d;
  border: 1px solid #3b579d;
  &:hover {
    background-color: #899ed0;
  }
}
.oc {
  color: white;
  background-color: #f48420;
  border: 1px solid #f48420;
  &:hover {
    background-color: #ffa656;
  }
}
.g\+ {
  color: #f44336;
  background-color: #ebf0f3;
  border: 1px solid #ebf0f3;
  &:hover {
    border-color: #f44336;
  }
  & > img {
    position: relative;
    left: 0;
    margin-right: 1rem;
  }
}

@media (max-width: 1278px) {
  .popup-content {
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
    padding: 0;
  }
  form,
  h2 {
    padding-left: 30px;
    padding-right: 30px;
  }
  input,
  select {
    padding: 24px 30px;
  }
  .button_link {
    max-width: calc(100% - 60px);
    padding-top: 22px;
    padding-bottom: 22px;
    justify-content: flex-start;
    & > img {
      position: relative;
      left: 0;
      margin-right: 1rem;
    }
  }
}
</style>
