<template>
  <div class="flex col mob:ai-fs">
    <h2 class="text-65 mob:text-36 mob:flex mob:w-full mob:row mob:jc-sb" v-if="title">
      {{title}}
      <div class="none mob:flex row">
        <svg class="cursor-pointer mr-3" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" @click="changeSlide(-1)">
          <circle opacity="0.3" r="29.5" transform="matrix(-1 0 0 1 30 30)" stroke="black"/>
          <path d="M24.2929 29.2929C23.9024 29.6834 23.9024 30.3166 24.2929 30.7071L30.6569 37.0711C31.0474 37.4616 31.6805 37.4616 32.0711 37.0711C32.4616 36.6805 32.4616 36.0474 32.0711 35.6569L26.4142 30L32.0711 24.3431C32.4616 23.9526 32.4616 23.3195 32.0711 22.9289C31.6805 22.5384 31.0474 22.5384 30.6569 22.9289L24.2929 29.2929ZM26 29L25 29L25 31L26 31L26 29Z" fill="black"/>
          </svg>
          <svg class="cursor-pointer " width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" @click="changeSlide(1)">
          <circle cx="30" cy="30" r="29.5" stroke="black"/>
          <path d="M35.7071 29.2929C36.0976 29.6834 36.0976 30.3166 35.7071 30.7071L29.3431 37.0711C28.9526 37.4616 28.3195 37.4616 27.9289 37.0711C27.5384 36.6805 27.5384 36.0474 27.9289 35.6569L33.5858 30L27.9289 24.3431C27.5384 23.9526 27.5384 23.3195 27.9289 22.9289C28.3195 22.5384 28.9526 22.5384 29.3431 22.9289L35.7071 29.2929ZM34 29L35 29L35 31L34 31L34 29Z" fill="black"/>
        </svg>
      </div>
    </h2>
    <div class="slider flex row flex-wrap relative w-full overflow-scroll jc-fs" ref="slider">
      <div class="flex row flex-wrap mob:jc-fs relative mob:wrap-nowrap">
        <template v-for="(item, i) in list">
          <router-link class="flex col px-1 mob:pr-9 w-1/4 mob:w-4/5 ai-center" :to="item.link" :key="i">
            <div class="relative">
              <img class="w-full" :src="item.img">
              <svg class="z-1 absolute" width="24" height="21" viewBox="0 0 24 21" stroke="inherit" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20.4634C11.6583 20.4634 11.3289 20.3496 11.0722 20.1428C10.1026 19.3633 9.16788 18.6307 8.34318 17.9846L8.33897 17.9812C5.92107 16.0866 3.83312 14.4504 2.38037 12.8387C0.756407 11.0368 0 9.32844 0 7.46212C0 5.64883 0.676207 3.97597 1.90393 2.75145C3.14629 1.51246 4.851 0.830078 6.70457 0.830078C8.08994 0.830078 9.35868 1.23281 10.4754 2.02698C11.039 2.42786 11.5499 2.91847 12 3.49074C12.4502 2.91847 12.9609 2.42786 13.5247 2.02698C14.6414 1.23281 15.9102 0.830078 17.2955 0.830078C19.1489 0.830078 20.8538 1.51246 22.0962 2.75145C23.3239 3.97597 23.9999 5.64883 23.9999 7.46212C23.9999 9.32844 23.2437 11.0368 21.6198 12.8385C20.167 14.4504 18.0792 16.0864 15.6617 17.9808C14.8355 18.628 13.8993 19.3618 12.9276 20.1431C12.671 20.3496 12.3415 20.4634 12 20.4634ZM6.70457 2.12278C5.24834 2.12278 3.91057 2.65717 2.93737 3.62762C1.9497 4.61272 1.4057 5.97445 1.4057 7.46212C1.4057 9.03178 2.04016 10.4356 3.4627 12.0138C4.83763 13.5394 6.88273 15.1419 9.25065 16.9974L9.25504 17.0008C10.0829 17.6495 11.0213 18.3849 11.998 19.1702C12.9805 18.3834 13.9204 17.6468 14.7498 16.9971C17.1176 15.1416 19.1625 13.5394 20.5374 12.0138C21.9598 10.4356 22.5942 9.03178 22.5942 7.46212C22.5942 5.97445 22.0502 4.61272 21.0626 3.62762C20.0895 2.65717 18.7516 2.12278 17.2955 2.12278C16.2288 2.12278 15.2494 2.43459 14.3845 3.04946C13.6139 3.59765 13.077 4.29064 12.7622 4.77553C12.6004 5.02488 12.3155 5.17371 12 5.17371C11.6845 5.17371 11.3996 5.02488 11.2377 4.77553C10.9231 4.29064 10.3863 3.59765 9.61539 3.04946C8.75059 2.43459 7.77116 2.12278 6.70457 2.12278Z" stroke="inherit" fill="inherit"/>
              </svg>
            </div>
            <span class="text-36 w-full mt-4 mb-8 color-grey">{{item.title}}</span>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {
      slide: 0
    }
  },
  methods: {
    changeSlide(index){
      let now = this.slide + index
      if(now <= 0)
        now = 0
      if(now >= this.list.length-1)
        now = this.list.length-1
        this.slide = now      
        let slider = this.$refs.slider
        this.$refs.slider.scrollTo({
          left: this.slide * ((slider.clientWidth + slider.scrollWidth) / (this.list.length+1)),
          behavior: "smooth"
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  svg.absolute{
    right: 12px;
    bottom: 12px;
    &:hover{
      fill: $margon;
      stroke: $margon;
    }
  }
  a{
    &:nth-child(odd){
      &>div:hover{
        &>img{
          transform: scale(1.25) rotate(12deg);
        }
      }
    }
    &>div{
      width: 320px;
      height: auto;
      max-width: 100%;
      max-height: 320px;
      fill: white;
      overflow: hidden;
      &>img{
        transition: 0.3s; 
      }
      &:hover{
        &>img{
          transform: scale(1.25) rotate(-12deg);
        }
      }
    }
  }
  @media (max-width: 1278px){
    .slider{
      width: calc(100% + 1rem);
    }
  }
</style>