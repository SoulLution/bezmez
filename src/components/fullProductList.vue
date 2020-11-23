<template>
	<div class="flex w-full col ai-center">
		<h2 class="text-65" v-if="title">{{title}}</h2>
		<div class="flex row flex-wrap jc-fs ai-center">
			<template v-for="(item, i) in list">
				<div class="me flex col ai-fs mb-11 pr-6 w-1/3 mob:w-1/2" :key="i">
					<div class="item-image cursor-pointer w-full relative overflow-hidden" @click="getMe(i)" ref="product">
						<div><img class="w-full h-full" :src="item.img"></div>
						<div class="sale color-white w-auto absolute py-2 px-6 bg-margon text-25" v-if="item.sale">-{{item.sale}}%</div>
            <svg class="z-1 absolute fill-white" width="24" height="21" viewBox="0 0 24 21" stroke="inherit" fill="inherit" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20.4634C11.6583 20.4634 11.3289 20.3496 11.0722 20.1428C10.1026 19.3633 9.16788 18.6307 8.34318 17.9846L8.33897 17.9812C5.92107 16.0866 3.83312 14.4504 2.38037 12.8387C0.756407 11.0368 0 9.32844 0 7.46212C0 5.64883 0.676207 3.97597 1.90393 2.75145C3.14629 1.51246 4.851 0.830078 6.70457 0.830078C8.08994 0.830078 9.35868 1.23281 10.4754 2.02698C11.039 2.42786 11.5499 2.91847 12 3.49074C12.4502 2.91847 12.9609 2.42786 13.5247 2.02698C14.6414 1.23281 15.9102 0.830078 17.2955 0.830078C19.1489 0.830078 20.8538 1.51246 22.0962 2.75145C23.3239 3.97597 23.9999 5.64883 23.9999 7.46212C23.9999 9.32844 23.2437 11.0368 21.6198 12.8385C20.167 14.4504 18.0792 16.0864 15.6617 17.9808C14.8355 18.628 13.8993 19.3618 12.9276 20.1431C12.671 20.3496 12.3415 20.4634 12 20.4634ZM6.70457 2.12278C5.24834 2.12278 3.91057 2.65717 2.93737 3.62762C1.9497 4.61272 1.4057 5.97445 1.4057 7.46212C1.4057 9.03178 2.04016 10.4356 3.4627 12.0138C4.83763 13.5394 6.88273 15.1419 9.25065 16.9974L9.25504 17.0008C10.0829 17.6495 11.0213 18.3849 11.998 19.1702C12.9805 18.3834 13.9204 17.6468 14.7498 16.9971C17.1176 15.1416 19.1625 13.5394 20.5374 12.0138C21.9598 10.4356 22.5942 9.03178 22.5942 7.46212C22.5942 5.97445 22.0502 4.61272 21.0626 3.62762C20.0895 2.65717 18.7516 2.12278 17.2955 2.12278C16.2288 2.12278 15.2494 2.43459 14.3845 3.04946C13.6139 3.59765 13.077 4.29064 12.7622 4.77553C12.6004 5.02488 12.3155 5.17371 12 5.17371C11.6845 5.17371 11.3996 5.02488 11.2377 4.77553C10.9231 4.29064 10.3863 3.59765 9.61539 3.04946C8.75059 2.43459 7.77116 2.12278 6.70457 2.12278Z" stroke="inherit" fill="inherit"/>
            </svg>
					</div>
					<div class="text-20 mt-4">
						<span class="opacity-27" :class="{'text-line-through': item.sale, 'font-600': !item.sale}">{{item.price}}</span>
						<span class="font-600 color-margon" v-if="item.sale">{{item.price - Math.round(item.price / 100 * item.sale)}}</span>
					</div>
					<div class="text-20 mt-1">
						<span>{{item.title}}</span>
						<span class="opacity-27">/ {{item.type}}</span>
					</div>
				</div>
			</template>
		</div>
		<div class="flex w-full jc-fs color-grey mt-10" v-if="link">
			<router-link class="b-0 bb-1 border-grey hover:color-margon hover:border-margon b-dashed px-1" :to="link">Смотреть все</router-link>
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
			link: {
				type: String,
				default: ''
			},
			list: {
				type: Array,
				default: () => []
			}
    },
    methods: {
      getMe(index){
        let me = this.$refs['product'][index],
            clone = me.cloneNode(true),
            rect = me.getBoundingClientRect(),
            div = document.createElement('div')
        div.style.width = me.clientWidth + 'px'
        div.style.height = me.clientHeight + 'px'
        div.style.top = rect.top + 'px'
        div.style.left = rect.left + 'px'
        div.style.position = 'fixed'
        div.style.backgroundColor = 'white'
        div.style.zIndex = '10'
        div.style.animation = 'open_product_bg 0.3s linear 0.2s 1 forwards'

        clone.style.maxWidth = me.clientWidth + 'px'
        clone.style.maxHeight = me.clientHeight + 'px'
        clone.style.top = rect.top + 'px'
        clone.style.left = rect.left + 'px'
        clone.style.position = 'fixed'
        clone.style.zIndex = '11'
        clone.style.animation = 'open_product 0.2s linear 1 forwards'
        // clone.children[0].style.height = '100vh'
        // clone.children[0].children[0].style.maxHeight = '100vh'
        document.body.appendChild(clone)
        document.body.appendChild(div)
        setTimeout(() => {
          document.body.removeChild(clone)
          document.body.removeChild(div)
          this.$router.push('/product')
        }, 600);
      }
    }
	}
</script>

<style lang="scss" scoped>
	.mr-12:last-child{
		margin-right: 0;
	}
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
  svg{
    right: 12px;
    top: 28px;
    &:hover{
      fill: $margon;
      stroke: $margon;
    }
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