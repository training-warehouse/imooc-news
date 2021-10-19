<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll__box">
				<view class="tab-scroll__item" v-for="(item,index) in list" :key="index">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view>
			<uni-icons type="gear" size="26" color="#666" class="tab-icons"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tab",
		data() {
			return {
				list: [{
						name: 'uni-app'
					},
					{
						name: 'H5'
					},
					{
						name: 'html'
					},
					{
						name: 'QQ'
					},
					{
						name: 'Vue'
					},
					{
						name: 'React'
					},
					{
						name: 'Python'
					},
					{
						name: 'Go'
					},
				]
			};
		}
	}
</script>

<style lang="scss">
	.tab {
		border-bottom: 1px solid #f5f5f5;
		background-color: #FFFFFF;
		width: 100%;
		box-sizing: border-box;
		display: flex;

		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;

			.tab-scroll__box {
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				height: 45px;
				box-sizing: border-box;

				.tab-scroll__item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333;
					font-size: 14px;
				}
			}
		}

		.tab-icons {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			margin-top: 10px;

			&::after {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				height: 100%;
				margin-top: -10px;
				background-color: #ddd;
			}
		}
	}
</style>
