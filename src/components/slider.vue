<template>
  <div class="flex row w-full jc-sb" :class="burger ? 'ai-fs' : 'ai-center'">
    <div class="flex col jc-sb h-full ai-fs w-1/5 z-1 mob:none">
      <nav class="flex col ai-fs text-18 mb-5.875 mob:none" v-if="burger">
        <template v-for="(link, i) in links">
          <router-link class="link color-grey mb-2" :key="i" :to="link.href">{{
            link.title
          }}</router-link>
        </template>
      </nav>
      <div class="flex col">
        <div
          class="cyrcle"
          :class="{ active: current_left === i - 1 }"
          @click="changeCurrentLeft(i - 1)"
          v-for="i in slides.length"
          :key="i"
        >
          <svg
            width="35"
            height="21"
            viewBox="0 0 35 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1" fill="white">
              <path
                d="M34.7204 20.6129C35.1756 18.0951 35.0731 15.5081 34.4201 13.0342C33.7672 10.5603 32.5798 8.25961 30.9414 6.29431C29.3031 4.32901 27.2537 2.74687 24.9378 1.65935C22.6218 0.571831 20.0955 0.00538912 17.5369 -6.89161e-05C14.9782 -0.00552695 12.4496 0.550132 10.1289 1.62776C7.80833 2.70539 5.75225 4.27877 4.10555 6.23706C2.45884 8.19535 1.26158 10.4909 0.598116 12.962C-0.0653533 15.4331 -0.178891 18.0196 0.265501 20.5394L1.11335 20.3898C0.690824 17.9941 0.798775 15.5348 1.4296 13.1853C2.06043 10.8357 3.19879 8.6531 4.76448 6.79115C6.33017 4.9292 8.2851 3.43323 10.4915 2.40861C12.698 1.384 15.1023 0.855677 17.535 0.860866C19.9678 0.866056 22.3698 1.40463 24.5718 2.43865C26.7739 3.47267 28.7224 4.97697 30.2801 6.84558C31.8379 8.7142 32.9669 10.9017 33.5877 13.2539C34.2085 15.6061 34.306 18.0658 33.8732 20.4597L34.7204 20.6129Z"
              />
            </mask>
            <path
              d="M34.7204 20.6129C35.1756 18.0951 35.0731 15.5081 34.4201 13.0342C33.7672 10.5603 32.5798 8.25961 30.9414 6.29431C29.3031 4.32901 27.2537 2.74687 24.9378 1.65935C22.6218 0.571831 20.0955 0.00538912 17.5369 -6.89161e-05C14.9782 -0.00552695 12.4496 0.550132 10.1289 1.62776C7.80833 2.70539 5.75225 4.27877 4.10555 6.23706C2.45884 8.19535 1.26158 10.4909 0.598116 12.962C-0.0653533 15.4331 -0.178891 18.0196 0.265501 20.5394L1.11335 20.3898C0.690824 17.9941 0.798775 15.5348 1.4296 13.1853C2.06043 10.8357 3.19879 8.6531 4.76448 6.79115C6.33017 4.9292 8.2851 3.43323 10.4915 2.40861C12.698 1.384 15.1023 0.855677 17.535 0.860866C19.9678 0.866056 22.3698 1.40463 24.5718 2.43865C26.7739 3.47267 28.7224 4.97697 30.2801 6.84558C31.8379 8.7142 32.9669 10.9017 33.5877 13.2539C34.2085 15.6061 34.306 18.0658 33.8732 20.4597L34.7204 20.6129Z"
              stroke="inherit"
              stroke-width="2"
              mask="url(#path-1-inside-1)"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex col w-4/5 mob:w-full">
      <div class="flex row w-full">
        <template v-for="(slide, i) in slides">
          <div class="hidden" :key="i" v-show="false">
            <img class="mr-22" :src="slide.img_left" />
            <img :src="slide.img_right" />
          </div>
        </template>
        <div class="flex row slide jc-fs mob:ai-center mob:w-full">
          <div
            class="absolute"
            style="z-index: 1; left: 0rem"
            @click="
              changeCurrentLeft(
                current_left - 1 < 0 ? slides.length - 1 : current_left - 1
              )
            "
          >
            <svg
              class="none mob:block"
              width="59"
              height="118"
              viewBox="0 0 59 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cy="59" r="59" fill="white" />
              <path
                d="M30.0833 57.5501H11.7963L18.7987 50.638C19.1654 50.2761 19.1796 49.6747 18.8303 49.2947C18.4815 48.9152 17.9013 48.9 17.5342 49.262L9.53717 57.1564C9.19112 57.5155 9 57.9923 9 58.5001C9 59.0074 9.19112 59.4848 9.55321 59.8595L17.5346 67.7378C17.712 67.9131 17.9393 68 18.1667 68C18.4087 68 18.6507 67.9012 18.8308 67.705C19.18 67.325 19.1658 66.7242 18.7992 66.3622L11.7674 59.4501H30.0833C30.5893 59.4501 31 59.0245 31 58.5001C31 57.9757 30.5893 57.5501 30.0833 57.5501Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            class="absolute"
            style="z-index: 1; right: 1rem"
            @click="
              changeCurrentLeft(
                current_left + 1 >= slides.length ? 0 : current_left + 1
              )
            "
          >
            <svg
              class="none mob:block"
              width="59"
              height="118"
              viewBox="0 0 59 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="59" cy="59" r="59" fill="white" />
              <path
                d="M28.9167 57.5501H47.2037L40.2013 50.638C39.8346 50.2761 39.8204 49.6747 40.1697 49.2947C40.5185 48.9152 41.0987 48.9 41.4658 49.262L49.4628 57.1564C49.8089 57.5155 50 57.9923 50 58.5001C50 59.0074 49.8089 59.4848 49.4468 59.8595L41.4654 67.7378C41.288 67.9131 41.0607 68 40.8333 68C40.5913 68 40.3493 67.9012 40.1692 67.705C39.82 67.325 39.8342 66.7242 40.2008 66.3622L47.2326 59.4501H28.9167C28.4107 59.4501 28 59.0245 28 58.5001C28 57.9757 28.4107 57.5501 28.9167 57.5501Z"
                fill="black"
              />
            </svg>
          </div>
          <transition name="fade-left">
            <img
              class="mr-22 mob:w-full mob:mr-0"
              :src="slides[current_left].img_left"
              v-if="current_left_act"
            />
          </transition>
          <transition name="fade-right">
            <img
              class="mob:none"
              :src="slides[current_right].img_right"
              v-if="current_right_act"
            />
          </transition>
        </div>
      </div>
      <div class="flex row w-full jc-sb fill-black mt-4 mob:none">
        <div class="flex row text-14">
          <span class="flex row left-arrow">0{{ current_right + 1 }}</span>
          <span>Новое поступление</span>
        </div>
        <div class="flex-row">
          <svg
            width="59"
            height="49"
            viewBox="0 0 59 49"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
            @click="changeCurrentSlide(-1)"
          >
            <path
              d="M55.9688 22.0938H7.96527L26.3466 4.58597C27.3091 3.66919 27.3464 2.14604 26.4296 1.18354C25.514 0.222239 23.9909 0.183739 23.0272 1.10052L2.03506 21.0965C1.1267 22.006 0.625 23.214 0.625 24.5001C0.625 25.785 1.1267 26.9942 2.07717 27.9434L23.0284 47.8985C23.494 48.3424 24.0907 48.5626 24.6875 48.5626C25.3228 48.5626 25.958 48.3124 26.4308 47.8155C27.3476 46.853 27.3103 45.331 26.3478 44.4142L7.88947 26.9063H55.9688C57.297 26.9063 58.375 25.8284 58.375 24.5001C58.375 23.1718 57.297 22.0938 55.9688 22.0938Z"
              fill="inherit"
            />
          </svg>
          <svg
            width="59"
            height="49"
            viewBox="0 0 59 49"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
            @click="changeCurrentSlide(1)"
          >
            <path
              d="M3.03125 22.0938H51.0347L32.6534 4.58597C31.6909 3.66919 31.6536 2.14604 32.5704 1.18354C33.486 0.222239 35.0091 0.183739 35.9728 1.10052L56.9649 21.0965C57.8733 22.006 58.375 23.214 58.375 24.5001C58.375 25.785 57.8733 26.9942 56.9228 27.9434L35.9716 47.8985C35.506 48.3424 34.9093 48.5626 34.3125 48.5626C33.6772 48.5626 33.042 48.3124 32.5692 47.8155C31.6524 46.853 31.6897 45.331 32.6522 44.4142L51.1105 26.9063H3.03125C1.703 26.9063 0.625 25.8284 0.625 24.5001C0.625 23.1718 1.703 22.0938 3.03125 22.0938Z"
              fill="inherit"
            />
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
          title: "Ткани",
          href: "/"
        },
        {
          title: "Тюль",
          href: "/"
        },
        {
          title: "Карнизы",
          href: "/"
        },
        {
          title: "Аксессуары",
          href: "/"
        },
        {
          title: "Готовые изделия",
          href: "/"
        },
        {
          title: "Фурнитура",
          href: "/"
        },
        {
          title: "Ковры",
          href: "/"
        }
      ],
      current_left: 0,
      current_right: 0,
      current_left_act: true,
      current_right_act: true,
      slides: [
        {
          link: "/",
          img_left: "/static/default_left.jpg",
          img_right: "/static/default_right.jpg"
        },
        {
          link: "/",
          img_left: "/static/default_left.jpg",
          img_right: "/static/default_right.jpg"
        },
        {
          link: "/",
          img_left: "/static/default_left.jpg",
          img_right: "/static/default_right.jpg"
        },
        {
          link: "/",
          img_left: "/static/default_left.jpg",
          img_right: "/static/default_right.jpg"
        },
        {
          link: "/",
          img_left: "/static/default_left.jpg",
          img_right: "/static/default_right.jpg"
        }
      ]
    };
  },
  computed: {
    burger() {
      return this.$store.getters["show/getBurger"];
    }
  },
  methods: {
    changeCurrentLeft(index) {
      this.current_left = -1;
      this.current_left_act = false;
      setTimeout(() => {
        this.current_left = index;
        this.current_left_act = true;
      }, 300);
    },
    changeCurrentSlide(index) {
      let now = this.current_right + index;
      if (now <= -1) now = this.slides.length - 1;
      if (now >= this.slides.length) now = 0;
      this.current_right_act = false;
      setTimeout(() => {
        this.current_right = now;
        this.current_right_act = true;
      }, 300);
    }
  }
};
</script>

<style lang="scss" scoped>
.cyrcle {
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
  &:hover {
    & > svg {
      transform: rotate(-180deg) translateY(-10px);
      opacity: 0.5;
    }
  }
  &.active {
    & > svg {
      transform: rotate(0);
      opacity: 1;
    }
  }
  & > svg {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 2px;
    transform: rotate(-180deg) translateY(-10px);
    stroke: #c4c4c4;
    transition: 0.3s;
  }
  &:before {
    content: "";
    max-width: 10px;
    max-height: 10px;
    min-width: 10px;
    min-height: 10px;
    border-radius: inherit;
    background-color: #c4c4c4;
    position: absolute;
  }
}
.left-arrow {
  &:after {
    content: "";
    width: 20px;
    height: 1px;
    display: block;
    @extend .bg-d_black;
    margin-left: 12px;
    margin-right: 10px;
  }
}
.link {
  transition: 0.3s;
  &:after {
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
  &:hover {
    @extend .color-black;
    transform: translateX(5px);
    &:after {
      max-width: 100%;
    }
  }
}
.slide {
  width: 100%;
  overflow: visible;
  & > * {
    opacity: 1;
    // transform: translateX(100%);
    transition: 0.6s;
    &:first-child {
      // transform: translateX(-100%);
    }
  }
}
.fade-left-enter-active,
.fade-left-leave-active {
  transition: 0.6s;
}
.fade-left-leave-to {
  transform: translateY(-100%);
}
.fade-left-enter {
  transform: translateY(100%);
}
.fade-left-enter,
.fade-left-leave-to {
  opacity: 0;
}
.fade-right-enter-active,
.fade-right-leave-active {
  transition: 0.6s;
}
.fade-right-enter,
.fade-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

svg {
  @extend .cursor-pointer;
  @extend .hover\:stroke-black;
  @extend .hover\:fill-white;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}
@media (max-width: 1278px) {
  .mob\:w-full {
    margin-left: -1rem;
    width: calc(100vw + 2rem);
  }
}
</style>
