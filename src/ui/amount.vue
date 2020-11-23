<template>
  <div class="amount flex row ai-center">
    <div class="flex ai-center jc-center cursor-pointer" @click="changeData(-1, data)">
      <svg width="13" height="1" viewBox="0 0 13 1" xmlns="http://www.w3.org/2000/svg">
        <rect width="13" height="1" transform="matrix(-1 -2.18557e-08 -2.18557e-08 1 13 0)"/>
      </svg>
    </div>
    <input class="text-center" v-mask="'##########'" placeholder="Выбрать" v-model="data">
    <div class="flex ai-center jc-center cursor-pointer" @click="changeData(1, data)">
      <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" width="13" height="1" transform="rotate(90 7 0)"/>
        <rect width="13" height="1" transform="matrix(-1 -2.18557e-08 -2.18557e-08 1 13 6)"/>
      </svg>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: NaN
    }
  },
  data() {
    return {
      data: this.value
    }
  },
  watch: {
    data(newData){
      if(newData)
        this.changeData(newData, 0)
    },
    value(newData){
      this.data = newData
    }
  },
  methods: {
    changeData(index, who){
      let now
      if(who)
        now = parseInt(who) + parseInt(index)
      else
        now = parseInt(index)
      if(now <= this.min)
        now = this.min
      if(now >= this.max)
        now = this.max
        this.data = now
      this.$emit('input', now)
    }
  }
}
</script>

<style lang="scss" scoped>
  .amount{
    min-width: 200px;
    &>*{
      height: 43px;
      border: 1px solid $grey;
      outline: none;
      width: 96px;
    }
    &>div{
      width: 43px;
    }
  }

</style>