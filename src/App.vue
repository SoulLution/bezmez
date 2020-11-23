<template>
  <div class="w-full flex col jc-sb" style="overflow-y: scroll; overflow-x: hidden; height: 100vh">
    <v-header />
    <v-registrate />
    <router-view id="main" />
    <v-footer />
  </div>
</template>

<script>
  import vHeader from './components/header'
  import vFooter from './components/footer'
  import vRegistrate from '@/components/registrate'
  export default {
    components: {
      vHeader,
      vFooter,
      vRegistrate
    }
  }
</script>

<style lang="scss">
  // @import "@/style/style.scss";
</style>