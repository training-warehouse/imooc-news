<template>
	<list-scroll class="list-scroll" @loadMore="loadMore">
		<list-card :item="item" v-for="item in list" :key="item._id"></list-card>
		<uni-load-more :status="load.loading" iconType="snow" v-if="list.length === 0 || list.length > 9">
		</uni-load-more>
	</list-scroll>
</template>

<script>
	import uniLoadMore from '@/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue'

	export default {
		components: {
			uniLoadMore
		},
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			load: {
				type: Object,
				default () {
					return {
						loading: 'loading'
					}
				}
			}
		},
		methods: {
			loadMore() {
				this.$emit('loadMore')
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll {
		height: 100%;
	}
</style>
