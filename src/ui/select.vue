<template>
  <label class="select cursor-pointer">
    <div class="imitate relative" :class="{'open': focus}">
      <span class="w-full flex ai-center jc-fs white_space-nowrap pl-2 pr-6 pt-2 pb-1 color-grey" @click="focusTrue()">{{value_name ? data[value_name] : data}}</span>
      <div class="options absolute flex col z-1 bg-white" v-if="focus" v-click-outside:focus>
        <div 
          class="option w-full white_space-nowrap flex ai-center jc-fs color-grey pl-2 pr-6 pt-2 pb-1" 
          :class="{'active': data === option}" 
          @click="data = option" :value="option" 
          v-for="option in local_options" :key="value_name ? option[value_name] : option"
        >
          {{value_name ? option[value_name] : option}}
        </div>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: [Object, String, Number],
      default: null
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
  .arrow-none{
    &>.imitate>span:after{
      display: none;
    }

  }
  .imitate{
    min-width: 50px;
    &>span{
      border-radius: 5px; 
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