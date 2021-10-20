<template>
	<view class="home">
		<navbar></navbar>
		<tab :list="tabList" @tab="tab" :tabIndex="tabIndex"></tab>
		<view class="home-list">
			<list :tab="tabList" :activeIndex="activeIndex" @change="change"></list>
		</view>
	</view>
</template>

<script>
	import list from '@/components/list/list.vue'

	export default {
		components:{
			list
		},
		data() {
			return {
				tabList: [],
				tabIndex: 0,
				activeIndex: 0
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel() {
				this.$api.get_label().then(res => this.tabList = res.data)
			},
			change(current) {
				this.tabIndex = current
			},
			tab({
				data,
				index
			}) {
				this.activeIndex = index
			}

		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;

		.home {
			display: flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;

			.home-list {
				flex: 1;
				box-sizing: border-box;
			}
		}
	}
</style>
