<template>
  <div class="w-full">
    <template v-for="(banner, i) in akzii">
      <div class="w-full py-30" :key="i" :style="{backgroundImage: `url(${banner.main_img})`}">
        <div class="content flex jc-sb ai-fe" :class="i % 2 === 0 ? 'row' : 'row-reverse'">
          <img :src="banner.banner">
          <router-link :to="banner.link" class="text-20 mob:w-full text-center mt-10 bg-l_black border-l_black color-white cursor-pointer py-3 px-10 radius-5 hover:color-l_black hover:bg-white">Перейти</router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      akzii: [
        {
          link: '/catalogAkzii',
          main_img: '/static/partner.png',
          banner: '/static/default_banner.png'
        }
      ]
    }
  },
  created(){
    for(let i = 0; i < 10; i ++)
    this.akzii.push(this.akzii[0])
  }
}
</script>

<style lang="scss" scoped>

  a{
      transition: 0.3s;
      box-shadow: 0 0 40px 40px $l_black inset, 0 0 0 0 $l_black;
    &:hover{
      box-shadow: 0 0 10px 0 $l_black inset, 0 0 10px 5px $l_black;
    }
  }
  @media (max-width: 1278px){
    .row, .row-reverse{
      flex-direction: column;
      align-items: center;
    }
    .row-reverse{
      // flex-direction: column;
    }
  }
</style>