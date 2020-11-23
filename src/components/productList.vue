<template>
	<div class="flex w-full col ai-center mob:ai-fs">
		<h2 class="text-65 mob:text-36" v-if="title">{{title}}</h2>
		<div class="flex row jc-fs ai-center mob:flex-wrap">
			<template v-for="(item, i) in list">
				<div class="flex col ai-fs mr-12 w-1/6 mob:w-1/2 mob:mr-0 mob:mb-6" :class="i % 2 !== 0 ? 'mob:pl-1' : 'mob:pr-1'" :key="i">
					<div class="item-image cursor-pointer w-full relative">
						<div><img class="w-full" :src="item.img"></div>
						<div class="sale color-white w-auto absolute py-1 px-3 bg-margon" v-if="item.sale">-{{item.sale}}%</div>
					</div>
					<div class="text-20 mt-4">
						<span :class="{'text-line-through opacity-27': item.sale}">{{item.price}}</span>
						<span class="font-600 color-margon" v-if="item.sale">{{item.price - Math.round(item.price / 100 * item.sale)}}</span>
					</div>
					<div class="text-20 mt-1">
						<span>{{item.title}}</span>
						<span class="opacity-27" v-if="item.type">/ {{item.type}}</span>
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
			transition: 0.3s;
		}
		&:hover img{
			transform: scale(1.1)
		}
	}
	.sale{
		bottom: -8px;
		left: 16px;
	}
</style>