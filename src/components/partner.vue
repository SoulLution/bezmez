<template>
  <div class="partner flex w-full ai-fe">
    <div
      class="flex col py-10 border-l_grey b-solid b-1 mob:b-0 ai-center mob:ai-fs px-25 pr-6 mob:p-0"
    >
      <h3 class="text-40 w-full mt-0 mob:w-4/5">{{ title }}</h3>
      <span class="text-20 w-full color-grey mob:w-4/5"
        >Станьте нашими оптовыми клиентами и получайте<br />скидку от 20% на
        каждый товар</span
      >
      <div class="w-full">
        <button
          class="text-20 mt-10 bg-l_black border-l_black color-white cursor-pointer py-3 mob:py-6 px-6 radius-5 hover:color-l_black hover:bg-white mob:w-9/10"
          @click="$store.dispatch('show/setRegistrate', true)"
        >
          Создать аккаунт
        </button>
      </div>
    </div>
    <div class="relative bg-grey h-48">
      <img src="" />
      <div class="sale color-white text-25 w-auto absolute py-1 px-3 bg-margon">
        -20%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Стать нашим партнером"
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  transition: 0.3s;
  box-shadow: 0 0 40px 40px $l_black inset, 0 0 0 0 $l_black;
  &:hover {
    box-shadow: 0 0 10px 0 $l_black inset, 0 0 10px 5px $l_black;
  }
}
.partner {
  & > div {
    @extend .w-1\/2;
    &:first-child {
      @extend .mr-12;
    }
  }
  &.col-reverse,
  &.mob\:col-reverse {
    & > div {
      @extend .w-full;
      &:first-child {
        @extend .mr-0;
        @extend .mt-12;
      }
    }
  }
}
.relative {
  height: 372px;
}
.sale {
  top: 0px;
  left: 0px;
}
.px {
  & > div:first-child {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
