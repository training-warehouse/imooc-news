<template>
	<swiper class="home-swiper" @change="change" :current="activeIndex">
		<swiper-item class="swiper-item" v-for="(item,index) in tab" :key="index">
			<list-item :list="listCatchData[index]"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'

	export default {
		name: "list",
		components: {
			listItem
		},
		props: {
			tab: {
				type: Array,
				default () {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				list: [],
				listCatchData: {}
			};
		},
		watch: {
			tab(newVal, oldVal) {
				if (newVal.length === 0) return
				this.getList(this.activeIndex)
			}
		},
		methods: {
			change(e) {
				const {
					current
				} = e.detail
				this.getList(current)
				this.$emit('change', current)
			},
			getList(current) {
				this.$api.get_list({
					name: this.tab[current].name
				}).then(res => {
					// 数据懒加载
					this.$set(this.listCatchData, current, res.data)
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;
		}
	}
</style>
