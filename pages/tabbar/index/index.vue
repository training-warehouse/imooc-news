<template>
	<view class="content">
		<navbar></navbar>
		<tab :list="tabList"></tab>
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
				this.$api.get_label().then(res=>this.tabList = res.data)
			}

		}
	}
</script>

<style lang="scss">
</style>
