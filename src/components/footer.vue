<template>
  <footer>
    <div class="content flex col text-18 mt-20">
      <div class="flex row jc-sb ai-fs w-full">
        <div class="flex col color-grey ai-fs w-1/6">
          <h3 class="color-black text-22">Меню</h3>
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
        <div class="flex col color-grey ai-fs">
          <h3 class="color-black text-22">Контакты</h3>
          <a class="mb-4">г. Алматы, ул Кабдолова 16/1</a>
          <a class="mb-4" href="tel:+7 707 511 00 00">+7 707 511 00 00</a>
          <a class="mb-4" href="email:info@bezmez.kz">email: info@bezmez.kz</a>
        </div>
        <div class="flex col">
          <h3 class="category flex ai-center jc-fs pr-9 color-black text-22">Категории</h3>
        </div>
        <div class="flex col">
          <h3 class="flex ai-center jc-fs pr-9 color-grey text-20">
            <img src="/static/rus.png" class="mr-4">
            Россия/РУБ
          </h3>
          <span class="color-black b-0 bb-2 b-solid border-black font-500">Стать партнером</span>
          <div class="flex row mt-20 opacity-30">
            <img class="mr-4" src="/static/001-facebook.png" alt="">
            <img class="mr-4" src="/static/001-instagram.png" alt="">
            <img class="mr-4" src="/static/001-youtube.png" alt="">
          </div>
        </div>
      </div>
      <div class="flex row jc-fs ai-fs w-full mt-12">
        <img class="mr-4" src="/static/visa.png" alt="">
        <img class="mr-4" src="/static/american-express.png" alt="">
        <img class="mr-4" src="/static/unionpay.png" alt="">
        <img class="mr-4" src="/static/paypal.png" alt="">
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .category{
    
      &:after{
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
</style>