<template>
  <div class="flex w-full col ai-fs">
    <h4 class="text-25">
      Покупают с этим товаром <span class="font-300">(последние 7 дней)</span>
    </h4>
    <div class="flex row mob:flex-wrap jc-fs ai-center">
      <template v-for="(item, i) in list">
        <div class="flex col ai-fs mr-12 w-1/6 mob:w-1/2 mob:mb-4" :key="i">
          <div class="item-image cursor-pointer w-full relative">
            <div><img class="w-full" :src="item.img" /></div>
            <div
              class="sale color-white w-auto absolute py-1 px-3 bg-margon"
              v-if="item.sale"
            >
              -{{ item.sale }}%
            </div>
          </div>
          <div class="text-20 mt-4 mob:mt-1">
            <span :class="{ 'text-line-through opacity-27': item.sale }">{{
              item.price
            }}</span>
            <span class="font-600 color-margon" v-if="item.sale">{{
              item.price - Math.round((item.price / 100) * item.sale)
            }}</span>
          </div>
          <div class="text-20 mt-1">
            <span>{{ item.title }}</span>
            <span class="opacity-27" v-if="item.type">/ {{ item.type }}</span>
          </div>
        </div>
      </template>
    </div>
    <div class="flex mob:none w-full jc-fe mt-10">
      <div
        class="get_back mt-10 pr-24 relative cursor-pointer color-grey hover:color-white"
      >
        <span class="text-20">Смотреть еще</span>
      </div>
    </div>
    <div class="mob:flex none w-full jc-fe mt-10">
      <button
        class="text-20 mt-10 bg-white border-l_black color-l_black cursor-pointer py-7 w-full radius-5 hover:color-l_black hover:bg-white"
      >
        Смотреть еще
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.mr-12:last-child {
  margin-right: 0;
}
.item-image {
  & > div {
    overflow: hidden;
  }
  & img {
    height: 240px;
    transition: 0.3s;
  }
  &:hover img {
    transform: scale(1.1);
  }
}
.sale {
  bottom: -8px;
  left: 16px;
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
    height: 100%;
    border-bottom: 2px solid $C4;
    border-right: 3px solid $C4;
    transform: skew(45deg) translate(-8%, 8px);
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-top: 5px;
    width: calc(100% + 5px);
    height: 100%;
    background-color: $C4;
    max-width: 0;
    transition: 0.3s;
    z-index: 0;
    transform: skew(45deg) translate(-40px, 8px);
  }
  & > span {
    transform: skew(-45deg);
    padding: relative;
    z-index: 1;
  }
}
@media (max-width: 1278px) {
  .mob\:w-1\/2 {
    width: calc(50% - 0.5rem);
    margin-left: 0.5rem;
    margin-right: 0;
    &:nth-child(odd) {
      margin-left: 0;
      margin-right: 0.5rem;
    }
  }
  .text-25 {
    border-top: 1px solid #00000020;
    width: 100vw;
    margin-left: -20px;
    padding: 28px 40px;
  }
}
</style>
