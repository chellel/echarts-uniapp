<template>
	<view class="container">
		<mpvue-echarts id="main" ref="pieChart" :echarts="echarts" @onInit="initChart" />
	</view>
</template>

<script>
	import * as echarts from 'echarts/echarts.min.js' /*chart.min.js为在线定制*/
	import mpvueEcharts from 'mpvue-echarts/src/echarts.vue'

	export default {
		data() {
			return {
				echarts
			}
		},
		components: {
			mpvueEcharts
		},
		methods: {
			initChart(e) {
				let {
					canvas,
					width,
					height
				} = e;
				width = width - 20;
				//let canvas = this.$refs.pieChart.canvas;
				echarts.setCanvasCreator(() => canvas);
				const chart = echarts.init(canvas, null, {
					width: width,
					height: height
				})

				canvas.setChart(chart)
				var option = {
					title: {
						text: '某站点用户访问来源',
						subtext: '纯属虚构',
						x: 'center'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} {b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						bottom: '10%',
						data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '40%'],
						data: [{
								value: 335,
								name: '直接访问'
							},
							{
								value: 310,
								name: '邮件营销'
							},
							{
								value: 234,
								name: '联盟广告'
							},
							{
								value: 135,
								name: '视频广告'
							},
							{
								value: 1548,
								name: '搜索引擎'
							}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				};

				chart.setOption(option)
				this.$refs.pieChart.setChart(chart);
				//return chart
			},
		}
	}
</script>

<style>
	page,
	.container {
		height: 100%;
	}

	.container {
		padding: 0 10px;
	}
</style>
