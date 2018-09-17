 var shykData = [{
 		xdata: ['北京0', '天津0', '河北0', '冀北0', '山西0', '山东0', '上海', '江西', '浙江', '安徽', '福建', '湖北', '湖南', '河南', '江西', '湖北', '湖南', '河南', '江西'],
 		joindata: [90, 91, 80, 91, 99, 80, 90, 96, 92, 91, 97, 91, 100, 90, 95, 70, 80, 70, 88],
 		componentdata: [96, 98, 75, 87, 85, 90, 79, 72, 75, 71, 77, 70, 88, 70, 75, 80, 88, 77, 80]
 	},
 	{
 		xdata: ['北京1', '天津1', '河北1', '冀北1', '山西1', '山东1', '上海', '江西', '浙江', '安徽', '福建', '湖北', '湖南', '河南', '江西', '湖北', '湖南', '河南', '江西'],
 		joindata: [80, 99, 85, 90, 99, 80, 90, 96, 92, 91, 97, 91, 100, 90, 95, 70, 80, 70, 88],
 		componentdata: [86, 73, 75, 70, 75, 72, 79, 72, 75, 71, 77, 70, 88, 70, 75, 80, 88, 77, 80]
 	}, {
 		xdata: ['北京2', '天津2', '河北2', '冀北2', '山西2', '山东2', '上海', '江西', '浙江', '安徽', '福建', '湖北', '湖南', '河南', '江西', '湖北', '湖南', '河南', '江西'],
 		joindata: [70, 100, 85, 91, 99, 89, 100, 96, 92, 91, 97, 91, 100, 90, 95, 70, 80, 70, 88],
 		componentdata: [86, 73, 75, 70, 75, 72, 79, 72, 75, 71, 77, 70, 88, 70, 75, 80, 88, 77, 80]
 	}, {
 		xdata: ['北京3', '天津3', '河北3', '冀北3', '山西3', '山东3', '上海', '江西', '浙江', '安徽', '福建', '湖北', '湖南', '河南', '江西', '湖北', '湖南', '河南', '江西'],
 		joindata: [88, 99, 85, 91, 99, 99, 100, 96, 92, 91, 97, 91, 100, 90, 95, 70, 80, 70, 88],
 		componentdata: [86, 73, 75, 70, 75, 72, 79, 72, 75, 71, 77, 70, 88, 70, 75, 80, 88, 77, 80]
 	}
 ]
 lineCharts(shykData[0].xdata, shykData[0].joindata, shykData[0].componentdata);

 page_select('shyk_page', shykData);

 //向后
 $('#shyk_page').on("click", ".icon_next", function() {
 	if($(this).siblings('.icon_circle.hover').index() != shykData.length) {
 		var _this = $(this).siblings('.icon_circle.hover').index();
 		$(this).parent().find('i.hover').removeClass('hover').next().addClass('hover');
 		lineCharts(shykData[_this].xdata, shykData[_this].joindata, shykData[_this].componentdata);
 	}
 });
 //向前
 $('#shyk_page').on("click", ".icon_prev", function() {
 	if($(this).siblings('.icon_circle.hover').index() != 1) {
 		var _this = $(this).siblings('.icon_circle.hover').index() - 2;
 		$(this).parent().find('i.hover').removeClass('hover').prev().addClass('hover');
 		lineCharts(shykData[_this].xdata, shykData[_this].joindata, shykData[_this].componentdata);
 	}
 });
 //圆点
 $('#shyk_page').on("click", ".icon_circle", function(e) {
 	var _this = $(this).index() - 1;
 	$(this).addClass('hover').siblings('.icon_circle').removeClass('hover');
 	lineCharts(shykData[_this].xdata, shykData[_this].joindata, shykData[_this].componentdata);
 });



 //优秀成果展示
 var yxcgzsfbArr = [{
 		xData: ['北京公司0', '天津公司0', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
 		yData: [
 			[12, 12, 10, 5, 0, 14, 5, 12, 5, 6, 3, 1, 4, 15, 0, 16],
 			[11, 10, 2, 3, 0, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16],
 			[8, 10, 12, 5, 10, 2, 10, 6, 3, 5, 10, 4, 2, 13, 14, 6]
 		],
 	},
 	{
 		xData: ['北京公司1', '天津公司1', '河北公司1', '冀北公司1', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
 		yData: [
 			[10, 10, 10, 5, 0, 4, 5, 8, 5, 6, 3, 1, 4, 8, 0, 6],
 			[1, 0, 10, 8, 0, 2, 5, 16, 0, 5, 0, 14, 12, 13, 4, 16],
 			[4, 10, 12, 7, 10, 5, 5, 10, 10, 5, 2, 4, 12, 3, 14, 6]
 		],
 	},
 	{
 		xData: ['北京公司2', '天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
 		yData: [
 			[1, 2, 6, 5, 10, 14, 5, 12, 5, 6, 13, 10, 4, 15, 0, 16],
 			[11, 10, 2, 3, 5, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16],
 			[5, 10, 12, 6, 10, 2, 5, 6, 10, 5, 10, 14, 8, 9, 4, 16]
 		],
 	},
 ]
 superimposedBar(yxcgzsfbArr[0].xData, 'gdwyxcg_legend', ['优秀成果', '优秀案例', '优秀论文'], yxcgzsfbArr[0].yData, 'gdwyxcg_yAxis', 'gdwyxcg_con')
 page_select('gdwyxcg_page', yxcgzsfbArr)

 //向后
 $('#gdwyxcg_page').on("click", ".icon_next", function() {
 	if($(this).siblings('.icon_circle.hover').index() != yxcgzsfbArr.length) {
 		var _this = $(this).siblings('.icon_circle.hover').index();
 		$(this).parent().find('i.hover').removeClass('hover').next().addClass('hover');
 		dataShow('gdwyxcg_con', 'gdwyxcg_yAxis', ['优秀成果', '优秀案例', '优秀论文'], yxcgzsfbArr, _this)
 	}
 });
 //向前
 $('#gdwyxcg_page').on("click", ".icon_prev", function() {
 	if($(this).siblings('.icon_circle.hover').index() != 1) {
 		var _this = $(this).siblings('.icon_circle.hover').index() - 2;
 		$(this).parent().find('i.hover').removeClass('hover').prev().addClass('hover');
 		dataShow('gdwyxcg_con', 'gdwyxcg_yAxis', ['优秀成果', '优秀案例', '优秀论文'], yxcgzsfbArr, _this)
 	}
 });
 //圆点
 $('#gdwyxcg_page').on("click", ".icon_circle", function(e) {
 	var _this = $(this).index() - 1;
 	$(this).addClass('hover').siblings('.icon_circle').removeClass('hover');
 	dataShow('gdwyxcg_con', 'gdwyxcg_yAxis', ['优秀成果', '优秀案例', '优秀论文'], yxcgzsfbArr, _this)
 });

 //先进典型数量分布
 var xjdxslfbArr = [{
 		xData: ['北京公司0', '天津公司0', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
 		yData: [
 			[12, 12, 10, 5, 0, 14, 5, 12, 5, 6, 3, 1, 4, 15, 0, 16],
 			[11, 10, 2, 3, 0, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16]
 		],
 	},
 	{
 		xData: ['北京公司1', '天津公司1', '河北公司1', '冀北公司1', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
 		yData: [
 			[10, 10, 10, 5, 0, 4, 5, 8, 5, 6, 3, 1, 4, 8, 0, 6],
 			[1, 0, 10, 8, 0, 2, 5, 16, 0, 5, 0, 14, 12, 13, 4, 16]
 		],
 	},
 	{
 		xData: ['北京公司2', '天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
 		yData: [
 			[1, 2, 6, 5, 10, 14, 5, 12, 5, 6, 13, 10, 4, 15, 0, 16],
 			[11, 10, 2, 3, 5, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16]
 		],
 	},
 	{
 		xData: ['北京公司3', '天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
 		yData: [
 			[2, 1, 10, 5, 9, 14, 0, 12, 9, 6, 3, 10, 4, 15, 10, 16],
 			[11, 10, 2, 3, 0, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16]
 		],
 	}, {
 		xData: ['北京公司4', '天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
 		yData: [
 			[2, 1, 10, 5, 9, 14, 10, 12, 9, 6, 3, 10, 4, 15, 10, 16],
 			[11, 10, 2, 3, 10, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16]
 		],
 	},
 ]
 superimposedBar(xjdxslfbArr[0].xData, 'xjdxslfb_legend', ['个人', '集体'], xjdxslfbArr[0].yData, 'xjdxslfb_yAxis', 'xjdxslfb_con')
 page_select('xjdxslfb_page', xjdxslfbArr)

 //向后
 $('#xjdxslfb_page').on("click", ".icon_next", function() {
 	if($(this).siblings('.icon_circle.hover').index() != xjdxslfbArr.length) {
 		var _this = $(this).siblings('.icon_circle.hover').index();
 		$(this).parent().find('i.hover').removeClass('hover').next().addClass('hover');
 		dataShow('xjdxslfb_con', 'xjdxslfb_yAxis', ['个人', '集体'], xjdxslfbArr, _this)
 	}
 });
 //向前
 $('#xjdxslfb_page').on("click", ".icon_prev", function() {
 	if($(this).siblings('.icon_circle.hover').index() != 1) {
 		var _this = $(this).siblings('.icon_circle.hover').index() - 2;
 		$(this).parent().find('i.hover').removeClass('hover').prev().addClass('hover');
 		dataShow('xjdxslfb_con', 'xjdxslfb_yAxis', ['个人', '集体'], xjdxslfbArr, _this)
 	}
 });
 //圆点
 $('#xjdxslfb_page').on("click", ".icon_circle", function(e) {
 	var _this = $(this).index() - 1;
 	console.log($('#xjdxslfb_con .company_name').length)
 	$(this).addClass('hover').siblings('.icon_circle').removeClass('hover');
 	dataShow('xjdxslfb_con', 'xjdxslfb_yAxis', ['个人', '集体'], xjdxslfbArr, _this)
 });

 //三会一课 折线图
 function lineCharts(xdata, joindata, componentdata) {
 	var myChart = echarts.init(document.getElementById('myCharts'));
 	option = {
 		color: ['#fa02f8', '#005de9'],
 		grid: {
 			top: 25,
 			bottom: 50,
 			left: 26,
 			right: 55,
 			containLabel: true
 		},
 		xAxis: {
 			type: 'category',
 			position: 'bottom',
 			data: xdata,
 			axisLine: {
 				show: false
 			},
 			axisTick: {
 				show: false
 			},
 			splitLine: {
 				show: true,
 				lineStyle: {
 					color: '#fff',
 					width: 3
 				},
 				interval: 14
 			},
 			axisLabel: {
 				margin: 50,
 				interval: 0,
 				textStyle: {
 					fontStyle: 'normal',
 					fontWeight: 600,
 					fontFamily: 'Microsoft YaHei',
 					fontSize: 50
 				}
 			}
 		},
 		yAxis: {
 			show: true,
 			type: 'value',
 			interval: 25,
 			min: 0,
 			max: 100,
 			axisLine: {
 				show: false
 			},
 			axisTick: {
 				show: false
 			},
 			axisLabel: {
 				show: true,
 				margin: 50,
 				formatter: "{value}%",
 				textStyle: {
 					fontStyle: 'normal',
 					fontFamily: 'Microsoft YaHei',
 					fontSize: 35,
 					fontWeight: '500'
 				}
 			},
 			splitLine: {
 				show: true,
 				lineStyle: {
 					color: '#fff',
 					width: 3

 				}
 			}
 		},
 		series: [{
 				name: '参会率',
 				type: 'line',
 				itemStyle: {
 					normal: {
 						label: {
 							show: true,
 							formatter: "{c}%",
 							position: 'bottom',
 							textStyle: {
 								fontStyle: 'normal',
 								fontFamily: 'Microsoft YaHei',
 								fontSize: 50
 							}
 						}
 					}
 				},
 				lineStyle: {
 					width: 4
 				},
 				symbolSize: 23,
 				data: joindata
 			},
 			{
 				name: '完成率',
 				type: 'line',
 				itemStyle: {
 					normal: {
 						label: {
 							show: true,
 							formatter: "{c}%",
 							position: 'bottom',
 							textStyle: {
 								fontStyle: 'normal',
 								fontFamily: 'Microsoft YaHei',
 								fontSize: 50
 							}
 						}
 					}
 				},
 				lineStyle: {
 					width: 4
 				},
 				symbolSize: 23,
 				data: componentdata
 			}

 		]
 	};

 	// 使用刚指定的配置项和数据显示图表。
 	myChart.setOption(option);
 }

 /*
  * 求一个数组中嵌套的两个或三个数组相同索引对应的值得和
  * eg： [[1,2,3,4],[5,6,7,8]]   => [6,8,10,12]
  * eg:[[1,2,3,4],[1,2,3,4],[1,2,3,4] => [3,6,9,12]
  * */
 function sum_arr(arr) {
 	if(arr.length == 2) {
 		var newArr = arr[0].map(function(value, index) {
 			return value + arr[1][index]
 		});
 		return newArr
 	} else if(arr.length == 3) {
 		var newArr = arr[0].map(function(value, index) {
 			return value + arr[1][index] + arr[2][index]
 		});
 		return newArr
 	}

 }

 //两维叠加或三维叠加
 /*
  * xData:x轴的名称
  * legendId:图例所在div的id名
  * legend：图例名称
  * yData：各个数据的值
  * yAxisId：y轴的div的id名
  * dataId：数值的id名
  * 
  * */
 function superimposedBar(xData, legendId, legend, yData, yAxisId, dataId) {
 	// 图例
 	var legend1 = '<ul>';
 	for(var i = 0; i < legend.length; i++) {
 		legend1 += '<li><i id="legend_' + (i + 1) + '"></i>' + legend[i] + '</li>'
 	}
 	legend1 += '</ul>'
 	$('#' + legendId).append(legend1);

 	var sumData = sum_arr(yData);
 	var YAxisMax = Math.ceil(Math.max.apply(null, sumData) / 4) * 4; // 获取sumData的最大值

 	var str = '<ul style="height:100%;width:100%">';
 	for(var i = 0; i < yData[0].length; i++) {
 		if(legend.length == 2) {
 			str += '<li class="swiper-slide center_each"><div class="center_col_bg"></div><div class="center_col_con"><ul class="ul_sum"><li class="center_col_top li_third" style="height: ' + Math.round(yData[0][i] / YAxisMax * 100) + '%"><div class="yellow_top"></div><div class="count_item">' + yData[0][i] + '</div><div class="yellow_bottom"></div></li><li class="center_col_cen li_sec" style="height: ' + Math.round(yData[1][i] / YAxisMax * 100) + '%"><div class="red_top"></div><div class="count_item">' + yData[1][i] + '</div><div class="red_bottom"></div></li></ul></div><p class="company_name">' + xData[i] + '</p></li>';
 		} else if(legend.length == 3) {
 			str += '<li class="swiper-slide center_each"><div class="center_col_bg"></div><div class="center_col_con"><ul class="ul_sum"><li class="center_col_top li_four" style="height:' + Math.round(yData[0][i] / YAxisMax * 100) + '%"><div class="count_item">' + yData[0][i] + '</div><div class="blue_top"></div><div class="blue_bottom"></div></li><li class="center_col_cen li_third" style="height:' + Math.round(yData[1][i] / YAxisMax * 100) + '%"><div class="yellow_top"></div><div class="count_item">' + yData[1][i] + '</div><div class="yellow_bottom"></div></li><li class="center_col_bot li_sec"  style="height:' + Math.round(yData[2][i] / YAxisMax * 100) + '%"><div class="red_top"></div><div class="count_item">' + yData[2][i] + '</div><div class="red_bottom"></div></li></ul></div><p class="company_name">' + xData[i] + '</p></li>';
 		}

 	};
 	str += '</ul>'
 	$('#' + dataId).append(str);

 	//当前行数据为0时，该行柱状图清空
 	$(".ul_sum li").each(function() {
 		if($(this).height() == 0) {
 			$(this).css('display', 'none');
 		} else {
 			$(this).css('display', 'block');
 		}
 	});

 	//y轴的刻度尺数值分布
 	var yAxis = '<ul>';
 	for(var i = 0; i < 5; i++) {
 		yAxis += '<li>' + YAxisMax * (1 - 0.25 * i) + '</li>'
 	}
 	yAxis += '</ul>';
 	$('#' + yAxisId).append(yAxis)
 }

 // 分页
 function page_select(id, arr) {
 	var str = '<i class="icon_prev"></i>'
 	for(var i = 0; i < arr.length; i++) {
 		if(i == 0) {
 			str += '<i class="icon_circle hover"></i>'
 		} else {
 			str += '<i class="icon_circle"></i>'
 		};
 	};
 	str += '<i class="icon_next"></i>'
 	$('#' + id).append(str)
 	$('#' + id).find('.icon_circle:last').css('padding-right', '0');

 };

 // 数据回显
 /*
     xDataId : 对应x轴的各个数据父元素的ID。
     yAxisId ： y轴的刻度值的父元素的id
     legend： 图例
     data:数据，必须是对象数组，对象里属性名为：xData和yData,
     index：当前的索引
 */
 function dataShow(xDataId, yAxisId, legend, data, index) {
 	var sumData = sum_arr(data[index].yData);
 	var YAxisMax = Math.ceil(Math.max.apply(null, sumData) / 4) * 4; // 获取sumData的最大值

 	//x轴
 	$('#' + xDataId).find('.company_name').each(function(i) {
 		$(this).text(data[index].xData[i])
 	})
 	// y轴刻度
 	$('#' + yAxisId).find('li').each(function(i) {
 		$(this).text(YAxisMax * (1 - 0.25 * i))
 	})
 	// x轴各个值
 	if(legend.length == 2) {
 		$('#' + xDataId).find('.center_col_top').each(function(i) {
 			$(this).height(Math.round(data[index].yData[0][i] / YAxisMax * 100) + '%');
 			$(this).find('.count_item').text(data[index].yData[0][i]);

 			$(this).siblings('.center_col_cen').height(Math.round(data[index].yData[1][i] / YAxisMax * 100) + '%');
 			$(this).siblings('.center_col_cen').find('.count_item').text(data[index].yData[1][i]);
 		})
 	} else if(legend.length == 3) {
 		$('#' + xDataId).find('.center_col_top').each(function(i) {
 			$(this).height(Math.round(data[index].yData[0][i] / YAxisMax * 100) + '%');
 			$(this).find('.count_item').text(data[index].yData[0][i]);

 			$(this).siblings('.center_col_cen').height(Math.round(data[index].yData[1][i] / YAxisMax * 100) + '%');
 			$(this).siblings('.center_col_cen').find('.count_item').text(data[index].yData[1][i]);

 			$(this).siblings('.center_col_cen').height(Math.round(data[index].yData[2][i] / YAxisMax * 100) + '%');
 			$(this).siblings('.center_col_cen').find('.count_item').text(data[index].yData[2][i]);
 		})
 	}
 	$(".ul_sum li").each(function() {
 		if($(this).height() == 0) {
 			$(this).css('display', 'none');
 		} else {
 			$(this).css('display', 'block');
 		}
 	});
 }