<template>
  <label class="select cursor-pointer">
    <div class="imitate relative" :class="{'open': focus}">
      <span class="w-full flex ai-center jc-fs white_space-nowrap pl-2 pr-6 pt-2 pb-1 color-grey" @click="focusTrue()">
        <img :src="options[data].images[0]">
        <div class="flex col ai-fs ml-5">
          <span class="color-black text-14">{{options[data][value_name]}}</span>
          <span class="text-12">{{options[data].store ? 'в наличии' : 'нет в наличии'}}</span>
        </div>
      </span>
      <div class="options absolute flex w-full col z-1 bg-white" v-if="focus" v-click-outside:focus>
        <div 
          class="option w-full white_space-nowrap flex ai-center jc-fs color-grey pl-2 pr-6 pt-2 pb-1" 
          :class="{'active': options[data] === option}" 
          @click="data = i" :value="option" 
          v-for="(option, i) in local_options" :key="option[value_name]"
        >
          <img :src="option.images[0]">
          <div class="flex col ai-fs ml-5">
            <span class="color-black text-14">{{option[value_name]}}</span>
            <span class="text-12">{{option.store ? 'в наличии' : 'нет в наличии'}}</span>
          </div>
        </div>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number],
      default: 0
    },
    options: {
      type: Array,
      default: () => []
    },
    id: {
      type: [String, Number]
    },
    value_name: {
      type: [String, Number]
    }
  },
  data() {
    return {
      data: this.value,
      focus: false,
      local_options: [],
    }
  },
  watch: {
    focus(newData){
      this.local_options = this.options.map(x => x)
      let index = this.options.indexOf(this.value)
      let value = this.options[index]
      this.local_options.splice(0,0, value)
      this.local_options.splice(index+1, 1)
    },
    data(newData){
      this.$emit('input', newData)
      setTimeout(()=>this.focus = false,0)
    },
    value(newData){
      this.data = newData
    }
  },
  methods: {
    focusTrue(){
      setTimeout(()=>this.focus = true, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
  img{
    max-width: 23px;
    max-height: 23px;
    min-width: 23px;
    min-height: 23px;
    border-radius: 50%;
  }
  .imitate{
    min-width: 200px;
    &>span{
      border: 1px solid $grey;
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
        right: 10px;
        transition: 0.3s;
      }   
    }
    &>.options{
      top: 0;
      left: 0;
      max-height: 0;
      overflow: hidden;
      // transition: 0.3s;
      &>.option{
        border-bottom: 1px solid $d_black;
        transition: 0.3;
        &:last-child{
          border-bottom: none;
        }
        &:hover{
          background-color: #d5e9ff;
        }
        &:after{
          content: "";
          display: block;
          position: absolute;
          border-right: 1px solid black;
          border-bottom: 1px solid black;
          max-width: 6px;
          max-height: 12px;
          min-width: 6px;
          min-height: 12px;
          transform: scale(0);
          right: 7px;
          transition: 0.3s;
        }
        &.active{
          &:after{
            transform: scale(1) rotate(45deg) translate(-1px, -2px);
          }
        }
      }
    }
    &.open{
      
      &>span{
        &:after{
          transform: rotate(-135deg) translate(-1px, -2px);
        }
      }
      &>.options{
        max-height: 200px;
        overflow: auto;
        border: 1px solid $d_black;
      }
    }
  }
</style>