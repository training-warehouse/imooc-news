<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{height:statusBarHeight+'px'}"></view>
			<view class="navbar-content" :style="{height:navBarHeight+'px',
			width:windowWidth+'px'}">
				<view class="navbar-search">
					<view class="navbar-search-icon">
						<!-- <text class="iconfont icon-search"></text> -->
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search-text">uni-app/vue</view>
				</view>
			</view>
		</view>
		<view :style="{height: navBarHeight+statusBarHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		name: "navbar",
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375
			};
		},
		created() {
			// 设置状态栏高度
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight

			this.windowWidth = info.windowWidth

			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 获取小程序胶囊位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) +
				(menuButtonInfo.top - info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss">
	@import '@/common/css/icon.css';

	.navbar {
		.navbar-fixed {
			width: 100%;
			background-color: $mk-base-color;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;

			.navbar-content {
				padding: 0 15px;
				box-sizing: border-box;
				display: flex;
				justify-content: center;
				align-items: center;

				.navbar-search {
					height: 30px;
					background-color: #FFFFFF;
					display: flex;
					align-items: center;
					width: 100%;
					border-radius: 30px;
					padding: 0 10px;

					.navbar-search-icon {
						margin-right: 10px;
					}

					.navbar-search-text {
						font-size: 12px;
						color: #999999;
					}
				}
			}
		}
	}
</style>
