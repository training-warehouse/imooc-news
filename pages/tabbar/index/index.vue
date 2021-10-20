<template>
	<view class="home">
		<navbar></navbar>
		<tab :list="tabList" @tab="tab"></tab>
		<list-scroll>
			<list-card mode="base"></list-card>
			<list-card mode="column"></list-card>
			<list-card mode="image"></list-card>
		</list-scroll>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: []
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel() {
				this.$api.get_label().then(res => this.tabList = res.data)
			},
			tab({
				data,
				index
			}) {

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
		}
	}
</style>
