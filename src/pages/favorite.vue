<template>
  <div>
    <div class="content flex col ai-fs">
      <h1 class="text-40 font-400 mob:none">Избранное</h1>
      <div class="flex row mob:col-reverse ai-fs mt-10">
        <div class="flex row flex-wrap w-4/5 mob:w-full">
          <template v-for="(item, i) in list">
            <div class="flex col ai-fs mb-11 pr-6 w-1/3 mob:w-1/2" :key="i">
              <div class="item-image cursor-pointer w-full relative overflow-hidden" ref="product">
                <div><img class="w-full h-full" :src="item.img"></div>
                <div class="sale color-white w-auto absolute py-2 px-6 bg-margon text-25" v-if="item.sale">-{{item.sale}}%</div>
                <svg class="z-1 absolute fill-margon stroke-margon hover:fill-transparent" width="37" height="33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.2344 1.93359C22.4437 1.93359 20.8019 2.50104 19.3548 3.6202C17.9675 4.69315 17.0438 6.05975 16.5 7.05349C15.9562 6.05969 15.0325 4.69315 13.6452 3.6202C12.1981 2.50104 10.5563 1.93359 8.76562 1.93359C3.76845 1.93359 0 6.02102 0 11.4413C0 17.2972 4.7014 21.3036 11.8187 27.3689C13.0273 28.3989 14.3973 29.5664 15.8212 30.8116C16.0089 30.9759 16.2499 31.0664 16.5 31.0664C16.7501 31.0664 16.9911 30.9759 17.1788 30.8116C18.6028 29.5663 19.9727 28.3988 21.1821 27.3682C28.2986 21.3036 33 17.2972 33 11.4413C33 6.02102 29.2316 1.93359 24.2344 1.93359Z"/>
                </svg>
              </div>
              <div class="flex row mob:col jc-sb mob:ai-fs w-full">
                <div class="flex col ai-fs">
                  <div class="text-20 mt-4">
                    <span class="opacity-27" :class="{'text-line-through': item.sale, 'font-600': !item.sale}">{{item.price}}</span>
                    <span class="font-600 color-margon" v-if="item.sale">{{item.price - Math.round(item.price / 100 * item.sale)}}</span>
                  </div>
                  <div class="text-20 mt-1">
                    <span>{{item.title}}</span>
                    <span class="opacity-27">/ {{item.type}}</span>
                  </div>
                </div>
                <router-link class="flex col mob:w-full mob:jc-fs mob:mt-3 mob:row cursor-pointer fill-black color-grey hover:fill-margon hover:color-margon" to="zakaz">
                  <svg width="25" height="18" viewBox="0 0 25 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.396 10.4V9.608H2.568V7.544H3.432V9.608H5.604V10.4H3.432V12.464H2.568V10.4H0.396Z"/>
                    <g clip-path="url(#clip0)">
                      <path d="M23.9392 16.584L22.7231 4.17296C22.6976 3.91314 22.4933 3.71586 22.2495 3.71586H19.9639V3.15736C19.9639 1.41645 18.6422 0 17.0178 0C15.3933 0 14.0717 1.41645 14.0717 3.15736V3.71586H11.786C11.5423 3.71586 11.3379 3.91314 11.3124 4.17296L10.0963 16.584C10.0823 16.7278 10.1259 16.8713 10.2161 16.9789C10.3064 17.0863 10.4351 17.1476 10.57 17.1476H23.4654C23.6005 17.1476 23.7291 17.0863 23.8193 16.9789C23.9098 16.8713 23.9532 16.7278 23.9392 16.584ZM15.0241 3.15736C15.0241 1.97927 15.9185 1.02071 17.0178 1.02071C18.1171 1.02071 19.0115 1.97927 19.0115 3.15736V3.71586H15.0241V3.15736ZM11.0988 16.1269L12.2149 4.73656H14.0717V5.86127C14.0717 6.14307 14.2849 6.37163 14.5479 6.37163C14.8108 6.37163 15.0241 6.14307 15.0241 5.86127V4.73656H19.0115V5.86127C19.0115 6.14307 19.2247 6.37163 19.4877 6.37163C19.7506 6.37163 19.9639 6.14307 19.9639 5.86127V4.73656H21.8207L22.9368 16.1269H11.0988Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="16" height="17.1477" fill="white" transform="translate(9)"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <span class="mt-1 text-12">В корзину</span>
                </router-link>
              </div>
            </div>
          </template>
        </div>
        <div class="flex row w-1/5 mob:w-full mob:jc-sb">
          <h1 class="text-36 font-400 none mob:block">Избранное</h1>
          <v-select class="mob:none flex" :options="['По умолчанию','По возрастанию','По убыванию','Сначала новые']" v-model="select" />
          <v-select class="mob:flex none b-1 b-solid border-l_grey radius-5 w-full ml-1 py-2 arrow-none" :options="['По умолчанию','По возрастанию','По убыванию','Сначала новые']" v-model="select" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: 'По умолчанию',
      list: [
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 0
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        },
        {
          price: 10000,
          title: 'Название',
          type: 'Тип',
          img: '/static/stat_product.jpg',
          sale: 20
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
	.item-image{
		&>div{
			overflow: hidden;
		}
		& img{
      height: 90vh;
      max-height: 450px;
			transition: 0.3s;
		}
		&:hover img{
			transform: scale(1.1)
		}
	}
	.sale{
		top: 0;
		left: 0;
	}
  svg.absolute{
    right: 12px;
    top: 28px;
    stroke-width: 4px;
  }
  @media (max-width: 1278px){
		.item-image{
			& img{
				height: 90vh;
				max-height: 270px;
				transition: 0.3s;
			}
		}
		.pr-6{
			padding-left: 0.5rem;
			padding-right: 0;
			&:nth-child(odd){
				padding-left: 0;
				padding-right: 0.5rem;
			}
		}
	}
</style>