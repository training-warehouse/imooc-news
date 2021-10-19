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
				uniCloud.callFunction({
					name: 'get_label',
				}).then(res => this.tabList = res.result.data)
			}

		}
	}
</script>

<style lang="scss">
</style>
