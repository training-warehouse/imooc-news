<template>
	<swiper class="home-swiper" @change="change" :current="activeIndex">
		<swiper-item class="swiper-item" v-for="(item,index) in tab" :key="index">
			<list-item :list="listCatchData[index]" :load="load[index]" @loadMore="loadMore"></list-item>
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
				listCatchData: {},
				load: {},
				pageSize: 10
			};
		},
		watch: {
			tab(newVal, oldVal) {
				if (newVal.length === 0) return
				this.getList(this.activeIndex)
			}
		},
		methods: {
			loadMore() {
				if (this.load[this.activeIndex].loading === 'noMore') return

				this.load[this.activeIndex].page++
				this.getList(this.activeIndex)
			},

			change(e) {
				const {
					current
				} = e.detail
				if (!this.listCatchData[current] ||
					this.listCatchData[current].length === 0) {
					this.getList(current)
				}

				this.$emit('change', current)
			},
			getList(current) {
				if (!this.load[current]) {
					this.load[current] = {
						page: 1,
						loading: 'loading'
					}
				}

				this.$api.get_list({
					name: this.tab[current].name,
					page: this.load[current].page,
					pageSize: this.pageSize
				}).then(res => {
					if (res.data.length === 0) {
						let oldLoad = {}
						oldLoad.loading = 'noMore'
						oldLoad.page = this.load[current].page
						this.$set(this.load, current, oldLoad)
						// 强制渲染页面
						this.$forceUpdate()
						return
					}

					let oldList = this.listCatchData[current] || []
					oldList.push(...res.data)

					// 数据懒加载
					this.$set(this.listCatchData, current, oldList)
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
