<template>
  <div class="popup fixed flex jc-center ai-center z-11" :class="{'hidden': !registrate}">
    <div class="popup-bg absolute h-full w-full" @click="$store.dispatch('show/setRegistrate', false)"></div>
    <div class="popup-content bg-white">
      <h2 class="text-48 text-center mt-0">Регистрация</h2>
      <div class="flex col w-full pb-10 b-0 bb-1 b-solid border-C4">
        <div class="flex row w-full">
          <input type="text" name="name" placeholder="Введите ФИО ...">
        </div>
        <div class="flex row w-full">
          <input type="text" name="phone" placeholder="Введите ваш телефонный номер ..." v-model="phone" v-mask="'+7 (###) ###-####'">
          </div>
        <div class="flex row w-full">
          <select>
            <option value="0" selected="selected" disabled >Выберите город</option>
          </select>
          </div>
        <div class="flex row w-full">
          <input type="email" name="email" placeholder="Введите ваш email ....">
          </div>
        <div class="flex row w-full">
          <input type="password" class="password w-full" placeholder="Введите ваш пароль ...">
          <div class="w-1/5"></div>
          <input type="password" class="password w-full" placeholder="Повторите пароль ...">
        </div>
        <div class="flex row jc-fs w-full">
          <button class="good text-20 mt-4 bg-l_black border-l_black color-white cursor-pointer py-3 px-6 radius-5 hover:color-l_black hover:bg-white">Зарегистрироваться</button>
          <button class="text-20 mt-4 ml-8 b-0 bb-1 b-dashed cursor-pointer border-C4 color-C4 hover:border-margon hover:color-margon bg-white">Сбросить</button>
        </div>
      </div>
      <div class="flex w-full col ai-fs">
        <p class="pl-10 color-grey mb-10">Через соц сети</p>
        <div class="flex w-full row flex-wrap jc-sb">
          <button class="button_link vk">
            <img src="/static/vk.png">
            Вконтакте
          </button>
          <button class="button_link fb">
            <img src="/static/fb.png">
            Facebook
          </button>
          <button class="button_link oc">
            <img src="/static/oc.png">
            Одноклассники
          </button>
        </div>
        <div class="flex w-full row flex-wrap">
          <button class="button_link g+">
            <img src="/static/g+.png">
            Google +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: ''
    }
  },
  computed: {
    registrate(){
      return this.$store.getters['show/getRegistrate']
    }
  },
  watch: {
    registrate(newBool){
      // let overflow = 'auto' 
      // if(newBool)
      //   overflow = 'hidden'
      //   console.log( document.getElementsByTagName('html')[0])
      // document.getElementsByTagName('html')[0].style.overflowY = overflow
    }
  }
}
</script>

<style lang="scss" scoped>
.popup{
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  &-bg{
    background-color: #00000056;
  }
  &-content{
    overflow: auto;
    max-height: 90%;
    height: 100%;
    width: 90%;
    max-width: 814px;
    padding: 1rem 70px 1rem;
  }
}
input, select{
  width: 100%;
  margin-bottom: 30px;
  padding: 1rem 40px;
  border-radius: 5px;
  border: 0.5px solid #00000056;
  outline: none;
  &:focus{
    border: 0.5px solid #000000;
  }
  &::placeholder{
    color: #00000040;
  }
  &.password{
    background-repeat: no-repeat;
    background-position: calc(100% - 16px) 50%;
    background-image: URL('/static/eye.png');
  }
}
  button.good{
    transition: 0.3s;
      box-shadow: 0 0 40px 40px $l_black inset, 0 0 0 0 $l_black;
    &:hover{
      box-shadow: 0 0 10px 0 $l_black inset, 0 0 10px 5px $l_black;
    }
  }

  .button_link{
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
    &:hover{
      background-color: white;
    }
    &>img{
      position: absolute;
      left: 1rem;
    }
  }
  .vk{
    color: white;
    background-color: #4C75A3;
    border:1px solid #4C75A3;
    &:hover{
      background-color: #8cc2ff;
    }
  }
  .fb{
    color: white;
    background-color: #3B579D;
    border:1px solid #3B579D;
    &:hover{
      background-color: #899ed0;
    }
  }
  .oc{
    color: white;
    background-color: #F48420;
    border:1px solid #F48420;
    &:hover{
      background-color: #ffa656;
    }
  }
  .g\+{
    color: #F44336;
    background-color: #EBF0F3;
    border:1px solid #EBF0F3;
    &:hover{
      border-color: #F44336;
    }
    &>img{
      position: relative;
      left: 0;
      margin-right: 1rem;
    }
  }
</style>