<template>
  <div class="flex row w-full jc-sb" :class="burger ? 'ai-fs' : 'ai-center' ">
    <div class="flex col jc-sb ai-fs h-full w-1/5 z-1 mob:none">
      <nav class="flex col ai-fs text-18 mb-5.875" v-if="burger">
        <template v-for="(link, i) in links">
          <router-link class="link color-grey mb-2" :key="i" :to="link.href">{{link.title}}</router-link>
        </template>
      </nav>
      <div class="flex col">
        <div class="cyrcle" :class="{'active': current === i-1}" @click="current = i-1" v-for="i in slides.length" :key="i">
          <svg width="35" height="21" viewBox="0 0 35 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1" fill="white">
            <path d="M34.7204 20.6129C35.1756 18.0951 35.0731 15.5081 34.4201 13.0342C33.7672 10.5603 32.5798 8.25961 30.9414 6.29431C29.3031 4.32901 27.2537 2.74687 24.9378 1.65935C22.6218 0.571831 20.0955 0.00538912 17.5369 -6.89161e-05C14.9782 -0.00552695 12.4496 0.550132 10.1289 1.62776C7.80833 2.70539 5.75225 4.27877 4.10555 6.23706C2.45884 8.19535 1.26158 10.4909 0.598116 12.962C-0.0653533 15.4331 -0.178891 18.0196 0.265501 20.5394L1.11335 20.3898C0.690824 17.9941 0.798775 15.5348 1.4296 13.1853C2.06043 10.8357 3.19879 8.6531 4.76448 6.79115C6.33017 4.9292 8.2851 3.43323 10.4915 2.40861C12.698 1.384 15.1023 0.855677 17.535 0.860866C19.9678 0.866056 22.3698 1.40463 24.5718 2.43865C26.7739 3.47267 28.7224 4.97697 30.2801 6.84558C31.8379 8.7142 32.9669 10.9017 33.5877 13.2539C34.2085 15.6061 34.306 18.0658 33.8732 20.4597L34.7204 20.6129Z"/>
            </mask>
            <path d="M34.7204 20.6129C35.1756 18.0951 35.0731 15.5081 34.4201 13.0342C33.7672 10.5603 32.5798 8.25961 30.9414 6.29431C29.3031 4.32901 27.2537 2.74687 24.9378 1.65935C22.6218 0.571831 20.0955 0.00538912 17.5369 -6.89161e-05C14.9782 -0.00552695 12.4496 0.550132 10.1289 1.62776C7.80833 2.70539 5.75225 4.27877 4.10555 6.23706C2.45884 8.19535 1.26158 10.4909 0.598116 12.962C-0.0653533 15.4331 -0.178891 18.0196 0.265501 20.5394L1.11335 20.3898C0.690824 17.9941 0.798775 15.5348 1.4296 13.1853C2.06043 10.8357 3.19879 8.6531 4.76448 6.79115C6.33017 4.9292 8.2851 3.43323 10.4915 2.40861C12.698 1.384 15.1023 0.855677 17.535 0.860866C19.9678 0.866056 22.3698 1.40463 24.5718 2.43865C26.7739 3.47267 28.7224 4.97697 30.2801 6.84558C31.8379 8.7142 32.9669 10.9017 33.5877 13.2539C34.2085 15.6061 34.306 18.0658 33.8732 20.4597L34.7204 20.6129Z" stroke="inherit" stroke-width="2" mask="url(#path-1-inside-1)"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="flex col w-4/5 mob:w-full">
      <div class="flex row w-full">
        <template v-for="(slide, i) in slides">
          <div class="flex row slide jc-fe" :class="{'active': current === i}" :key="i">
            <div class="content flex col w-full mob:ai-fs absolute z-1 slide-text">
              <h1 class="w-full mob:w-4/5 text-80 mob:text-36 mb-8" v-html="slide.title"></h1>
              <h2 class="w-full mob:w-4/5 text-64 mob:text-24" v-html="slide.pre_title"></h2>
              <div class="w-full">
                <button class="text-20 mt-10 bg-l_black border-l_black color-white cursor-pointer py-3 px-6 radius-5 mob:py-7 mob:w-full hover:color-l_black hover:bg-white">{{slide.button}}</button>
              </div>
            </div>
            <img :src="slide.img">
          </div>
        </template>
      </div>
      <div class="flex row w-full jc-fe mt-8">
        <div class="flex-row fill-C4">
          <svg class="mr-22" width="52" height="41" viewBox="0 0 52 41" fill="inherit" xmlns="http://www.w3.org/2000/svg" @click="changeCurrentSlide(-1)">
            <rect width="52" height="2" transform="matrix(-1 0 0 1 52 19)" fill="inherit"/>
            <rect y="19.6235" width="27.7516" height="2" transform="rotate(-45 0 19.6235)" fill="inherit"/>
            <rect width="27.7516" height="2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 21.0376 38.6235)" fill="inherit"/>
            <path d="M21.0376 39L21.0376 0C19.933 -4.82823e-08 19.0376 0.895431 19.0376 2L19.0376 39L21.0376 39Z" fill="inherit"/>
          </svg>
          <svg width="55" height="41" viewBox="0 0 55 41" fill="inherit" xmlns="http://www.w3.org/2000/svg" @click="changeCurrentSlide(1)">
            <rect width="27.7516" height="2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 54.0376 19.6235)" fill="inherit"/>
            <rect x="33" y="38.6235" width="27.7516" height="2" transform="rotate(-45 33 38.6235)" fill="inherit"/>
            <path d="M33 39L33 0C34.1046 -4.82823e-08 35 0.895431 35 2L35 39L33 39Z" fill="inherit"/>
            <rect width="52" height="2" transform="matrix(-1 0 0 1 52 20)" fill="inherit"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Ткани',
          href: '/'
        },
        {
          title: 'Тюль',
          href: '/'
        },
        {
          title: 'Карнизы',
          href: '/'
        },
        {
          title: 'Аксессуары',
          href: '/'
        },
        {
          title: 'Готовые изделия',
          href: '/'
        },
        {
          title: 'Фурнитура',
          href: '/'
        },
        {
          title: 'Ковры',
          href: '/'
        }
      ],
      current: 0,
      slides: [
        {
          link: '/',
          title: 'Станьте партнером<br>Уже сегодня',
          pre_title: 'Развивайтесь вместе с нами',
          button: 'Присоедениться',
          img: '/static/partner.png'
        },
        {
          link: '/',
          title: 'Станьте партнером<br>Уже сегодня',
          pre_title: 'Развивайтесь вместе с нами',
          button: 'Присоедениться',
          img: '/static/partner.png'
        },
        {
          link: '/',
          title: 'Станьте партнером<br>Уже сегодня',
          pre_title: 'Развивайтесь вместе с нами',
          button: 'Присоедениться',
          img: '/static/partner.png'
        },
      ]
    }
  },
  computed: {
    burger(){
      return this.$store.getters['show/getBurger']
    }
  },
  methods: {
    changeCurrentSlide(index){
      let now = this.current + index
      if(now <= -1)
        now = this.slides.length - 1
      if(now >= this.slides.length)
        now = 0
        this.current = now
    }
  }
}
</script>

<style lang="scss" scoped>
button{
  transition: 0.3s;
    box-shadow: 0 0 40px 40px $l_black inset, 0 0 0 0 $l_black;
  &:hover{
    box-shadow: 0 0 10px 0 $l_black inset, 0 0 10px 5px $l_black;
  }
}
.slide-text{
  top: 70px;
  &>*{
    @extend .my-0;
  }
}
.cyrcle{
  max-width: 35px;
  max-height: 35px;
  min-width: 35px;
  min-height: 35px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover{
    &>svg{
      transform: rotate(-180deg) translateY(-10px);
      opacity: 0.5;
    }
  }
  &.active{
    &>svg{
      transform: rotate(0);
      opacity: 1;
    }
  }
  &>svg{
    opacity: 0;
    position: absolute;
    left: 0;
    top: 2px;
    transform: rotate(-180deg) translateY(-10px);
    stroke: #C4C4C4;
    transition: 0.3s;
  }
  &:before{
    content: "";
    max-width: 10px;
    max-height: 10px;
    min-width: 10px;
    min-height: 10px;
    border-radius: inherit;
    background-color: #C4C4C4;
    position: absolute;
  }
}
.left-arrow{
  &:after{
    content: "";
    width: 20px;
    height: 1px;
    display: block;
    @extend .bg-d_black;
    margin-left: 12px;
    margin-right: 10px;
  }
}
.slide{
  width: 0;
  overflow: hidden;
  & h1{
    opacity: 0;
    transform: translateY(-50%);
    transition: 0.6s;
  }
  & h2{
    opacity: 0;
    transform: translateY(-450%);
    transition: transform 1s, opacity 2s;
  }
  & button{
    opacity: 0;
    transform: translateY(-450%);
  }
  &>img{
    opacity: 0;
    transform: translateX(100%);
    transition: 0.6s;
  }
  &.active{
    overflow: visible;
    width: 100%;
    min-width: 100vw;
    &>*{
      opacity: 1;
      transform: translateX(0);
    }
    & h1{
      animation: transition_text 0.3s linear 1 forwards;
    }
    & h2{
      animation: transition_text 0.3s linear 0.3s 1 forwards;
    }
    & button{
      animation: transition_text 0.3s linear 0.5s 1 forwards;
    }
  }
}

.link{
  transition: 0.3s;
  &:after{
    content: "";
    position: absolute;
    left: -5px;
    bottom: 0;
    height: 1px;
    @extend .bg-black;
    width: 100%;
    max-width: 0;
    transition: 0.3s;
  }
  &:hover{
    @extend .color-black;
    transform: translateX(5px);
    &:after{
      max-width: 100%;
    }
  }
}

svg{
  @extend .cursor-pointer;
  @extend .hover\:fill-black;
  transition: 0.3s;
  &:hover{
    transform: scale(1.1);
  }
}
@keyframes transition_text{
  from{
    opacity: 0;
    transform: translateY(-100%);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
}
@media (max-width: 1278px){
  .slide{
    &>img{
      max-width: 80%;
      height: calc(100vh -  126px);
    }
    &.active{
      &>img{
        opacity: 1;
        transform: translateX(30%);
      }
    }
  }
}
</style>