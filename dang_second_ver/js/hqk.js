// data_click =false;
 

//------------------------------------------------------
//setInterval(function(){							
//	// 三会一课列表
//	shykInit(dp3_data.shykListsData[0].participantRate,dp3_data.shykListsData[0].finishRate,dp3_data.shykListsData[0].xData,'right_shyk_lists_zbdydh');
//	shyk_bar_package('shyk_list_page_zbdydh', dp3_data.shykListsData,'right_shyk_lists_zbdydh')
//	
//	var data11 = [{
//		xData: ['北京公司11北京公司10', '天津公司0', '河北公司', '冀北公司冀北公司冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司'],
//		participantRate: [12, 12, 10, 5, 0, 14, 5, 12],
//		finishRate: [5, 6, 3, 1, 4, 8, 0, 6],
//	}, {
//		xData: ['北京公司11北京公司11', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司'],
//		participantRate: [10, 10, 10, 5, 0, 4, 5, 8],
//		finishRate:[12, 12, 10, 5, 0, 14, 5, 12]
//	}, {
//		xData: ['北京公司12北京公司12', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司'],
//		participantRate: [10, 14, 5, 12, 5, 6, 13, 10],
//		finishRate:[9, 14, 0,10, 4, 15, 10, 16],
//	}]
//	shykInit(data11[0].participantRate,data11[0].finishRate,data11[0].xData,'right_shyk_lists_zbwyh');
//	shyk_bar_package('shyk_list_page_zbwyh', data11,'right_shyk_lists_zbwyh')
//	
//	var data22 = [{
//		xData: ['北京公司12北京公司10', '天津公司0', '河北公司', '冀北公司冀北公司冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司'],
//		participantRate: [12, 12, 10, 5, 0, 14, 5, 12],
//		finishRate: [5, 6, 3, 1, 4, 8, 0, 6],
//	},{
//		xData: ['北京公司13北京公司13', '天津公司天津公司', '河北公司', '冀北公司', '山西公司'],
//		participantRate: [5, 6, 3, 1, 4],
//		finishRate:[2, 1, 10, 5, 9],
//	}]
//	shykInit(data22[0].participantRate,data22[0].finishRate,data22[0].xData,'right_shyk_lists_dxzh');
//	shyk_bar_package('shyk_list_page_dxzh', data22,'right_shyk_lists_dxzh')
//	
//	var data33 = [{
//		xData: ['北京公司131北京公司10', '天津公司0', '河北公司', '冀北公司冀北公司冀北公司','山西公司', '山东公司', '上海公司', '江西公司江西公司'],
//		participantRate: [12, 12, 10, 5, 0, 14,10,16],
//		finishRate: [5, 6, 3, 1, 4, 8,10,9],
//	}, {
//		xData: ['北京公司11北京公司11', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司'],
//		participantRate: [10, 10, 10, 5, 0, 4, 5, 8],
//		finishRate:[12, 12, 10, 5, 0, 14, 5, 12]
//	}, {
//		xData: ['北京公司12北京公司12', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司'],
//		participantRate: [10, 14, 5, 12, 5, 6, 13, 10],
//		finishRate:[9, 14, 0,10, 4, 15, 10, 16],
//	}, {
//		xData: ['北京公司13北京公司13', '天津公司天津公司', '河北公司', '冀北公司', '山西公司'],
//		participantRate: [5, 6, 3, 1, 4],
//		finishRate:[2, 1, 10, 5, 9],
//	}]
//	shykInit(data33[0].participantRate,data33[0].finishRate,data33[0].xData,'right_shyk_lists_dk');
//	shyk_bar_package('shyk_list_page_dk', data33,'right_shyk_lists_dk')
//	
//	
//	var aa = [{
//		xData: ['北京公司11北京公司11', '天津公司0', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
//		yData: [
//			[12, 12, 10, 5, 0, 14, 5, 12, 5, 6, 3, 1, 4, 15, 0, 16],
//			[11, 10, 2, 3, 0, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16]
//		],
//	}, {
//		xData: ['北京公司22北京公司22', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
//		yData: [
//			[10, 10, 10, 5, 0, 4, 5, 8, 5, 6, 3, 1, 4, 8, 0, 6],
//			[1, 0, 10, 8, 0, 2, 5, 16, 0, 5, 0, 14, 12, 13, 4, 16]
//		],
//	}, {
//		xData: ['北京公司33北京公司33', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
//		yData: [
//			[1, 2, 6, 5, 10, 14, 5, 12, 5, 6, 13, 10, 4, 15, 0, 16],
//			[11, 10, 2, 3, 5, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16]
//		],
//	}, {
//		xData: ['北京公司44北京公司44', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
//		yData: [
//			[2, 1, 10, 5, 9, 14, 0, 12, 9, 6, 3, 10, 4, 15, 10, 16],
//			[11, 10, 2, 3, 0, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16]
//		],
//	} , {
//		xData: ['北京公司44北京公司44', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
//		yData: [
//			[2, 1, 10, 5, 9, 14, 0, 12, 9, 6, 3, 10, 4, 15, 10, 16],
//			[11, 10, 2, 3, 0, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16]
//		],
//	} ];
//	var bb= [{
//		xData: ['北京公司10北京公司10', '天津公司0', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
//		yData: [[12, 12, 10, 5, 0, 14, 5, 12, 5, 6, 3, 1, 4, 15, 0, 16]],
//	}, {
//		xData: ['北京公司11北京公司11', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
//		yData: [[10, 10, 10, 5, 0, 4, 5, 8, 5, 6, 3, 1, 4, 8, 0, 6]],
//	}, {
//		xData: ['北京公司22北京公司22', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
//		yData: [[1, 2, 6, 5, 10, 14, 5, 12, 5, 6, 13, 10, 4, 15, 0, 16]],
//	}, {
//		xData: ['北京公司33北京公司33', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
//		yData: [[2, 1, 10, 5, 9, 14, 0, 12, 9, 6, 3, 10, 4, 15, 10, 16]],
//	}, {
//		xData: ['北京公司33北京公司33', '天津公司天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
//		yData: [[2, 1, 10, 5, 9, 14, 0, 12, 9, 6, 3, 10, 4, 15, 10, 16]],
//	}];
//	
//	
//	
//	
//	// 各单位换届完成率
//	// 初始化
//	superimposedBar(bb[0].xData, 'gdwyxcg_legend', ['换届完成率'], bb[0].yData, 'gdwyxcg_yAxis', 'gdwyxcg_con');
//	// 数据回显+分页渲染+按钮点击
//	all_bar_package('gdwyxcg_page', 'gdwyxcg_con', 'gdwyxcg_yAxis', ['换届完成率'], bb, 1)
//	
//	// 各单位先进典型数量分布
//	// 初始化
//	superimposedBar(aa[0].xData, 'xjdxslfb_legend', ['个人', '集体'], aa[0].yData, 'xjdxslfb_yAxis', 'xjdxslfb_con');
//	// 数据回显+分页渲染+按钮点击
//	all_bar_package('xjdxslfb_page','xjdxslfb_con', 'xjdxslfb_yAxis', ['个人', '集体'], aa, 1)
//},20000)

// -----------------------------------------------------------------

/* shyk_lineCharts('myCharts',dp3_data.shykData[0].xdata, dp3_data.shykData[0].joindata, dp3_data.shykData[0].componentdata);
 page_select('shyk_page', dp3_data.shykData);*/

 //向后
 $('#shyk_page').on("click", ".icon_next", function() {
	var _this = $(this).siblings('.icon_circle.hover').index();
	$(this).parent().find('i.hover').removeClass('hover').next().addClass('hover');
 	if(_this == dp3_data.shykData.length) {
 		$(this).siblings('.icon_circle').eq(0).addClass('hover');
 		_this = 0;
 		shyk_lineCharts('myCharts',dp3_data.shykData[_this].xdata, dp3_data.shykData[_this].joindata, dp3_data.shykData[_this].componentdata);
 	}else{
 		shyk_lineCharts('myCharts',dp3_data.shykData[_this].xdata, dp3_data.shykData[_this].joindata, dp3_data.shykData[_this].componentdata);
 	}
 });
 //向前
 $('#shyk_page').on("click", ".icon_prev", function() {
	var _this = $(this).siblings('.icon_circle.hover').index() - 2;
	$(this).parent().find('i.hover').removeClass('hover').prev().addClass('hover');
 	if(_this == -1) {
 		_this = dp3_data.shykData.length - 1;
 		$(this).siblings('.icon_circle').eq(dp3_data.shykData.length - 1).addClass('hover');
 		shyk_lineCharts('myCharts',dp3_data.shykData[_this].xdata, dp3_data.shykData[_this].joindata, dp3_data.shykData[_this].componentdata);
 	}else{
 		shyk_lineCharts('myCharts',dp3_data.shykData[_this].xdata, dp3_data.shykData[_this].joindata, dp3_data.shykData[_this].componentdata);
 	}
 });
 //圆点
 $('#shyk_page').on("click", ".icon_circle", function(e) {
 	var _this = $(this).index() - 1;
 	$(this).addClass('hover').siblings('.icon_circle').removeClass('hover');
 	shyk_lineCharts('myCharts',dp3_data.shykData[_this].xdata, dp3_data.shykData[_this].joindata, dp3_data.shykData[_this].componentdata);
 });

 
// // 各单位换届完成率
// gdwhjwcl_lineCharts('gdwhjwcl_charts',dp3_data.shykData[0].xdata, dp3_data.shykData[0].componentdata);
// page_select('gdwhjwcl_page', dp3_data.shykData);
 //向后
 $('#gdwhjwcl_page').on("click", ".icon_next", function() {
	var _this = $(this).siblings('.icon_circle.hover').index();
	$(this).parent().find('i.hover').removeClass('hover').next().addClass('hover');
 	if(_this == dp3_data.shykData.length) {
 		$(this).siblings('.icon_circle').eq(0).addClass('hover');
 		_this = 0;
 		gdwhjwcl_lineCharts('gdwhjwcl_charts',dp3_data.shykData[_this].xdata, dp3_data.shykData[_this].componentdata);
 	}else{
 		gdwhjwcl_lineCharts('gdwhjwcl_charts',dp3_data.shykData[_this].xdata, dp3_data.shykData[_this].componentdata);
 	}
 });
 //向前
 $('#gdwhjwcl_page').on("click", ".icon_prev", function() {
	var _this = $(this).siblings('.icon_circle.hover').index() - 2;
	$(this).parent().find('i.hover').removeClass('hover').prev().addClass('hover');
 	if(_this == -1) {
 		_this = dp3_data.shykData.length - 1;
 		$(this).siblings('.icon_circle').eq(dp3_data.shykData.length - 1).addClass('hover');
 		gdwhjwcl_lineCharts('gdwhjwcl_charts',dp3_data.shykData[_this].xdata, dp3_data.shykData[_this].componentdata);
 	}else{
 		gdwhjwcl_lineCharts('gdwhjwcl_charts',dp3_data.shykData[_this].xdata, dp3_data.shykData[_this].componentdata);
 	}
 });
 //圆点
 $('#gdwhjwcl_page').on("click", ".icon_circle", function(e) {
 	var _this = $(this).index() - 1;
 	$(this).addClass('hover').siblings('.icon_circle').removeClass('hover');
 	gdwhjwcl_lineCharts('gdwhjwcl_charts',dp3_data.shykData[_this].xdata, dp3_data.shykData[_this].componentdata);
 });

 //优秀成果展示
// var yxcgzsfbArr = [{
// 		xData: ['北京公司0', '天津公司0', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
// 		yData: [
// 			[12, 12, 10, 5, 0, 14, 5, 12, 5, 6, 3, 1, 4, 15, 0, 16],
// 			[11, 10, 2, 3, 0, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16],
// 			[8, 10, 12, 5, 10, 2, 10, 6, 3, 5, 10, 4, 2, 13, 14, 6]
// 		],
// 	},
// 	{
// 		xData: ['北京公司1', '天津公司1', '河北公司1', '冀北公司1', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
// 		yData: [
// 			[10, 10, 10, 5, 0, 4, 5, 8, 5, 6, 3, 1, 4, 8, 0, 6],
// 			[1, 0, 10, 8, 0, 2, 5, 16, 0, 5, 0, 14, 12, 13, 4, 16],
// 			[4, 10, 12, 7, 10, 5, 5, 10, 10, 5, 2, 4, 12, 3, 14, 6]
// 		],
// 	},
// 	{
// 		xData: ['北京公司2', '天津公司', '河北公司', '冀北公司', '山西公司', '山东公司', '上海公司', '江西公司', '浙江公司', '安徽公司', '福建公司', '湖北公司', '湖南公司', '河南公司', '江西公司', '新疆公司'],
// 		yData: [
// 			[1, 2, 6, 5, 10, 14, 5, 12, 5, 6, 13, 10, 4, 15, 0, 16],
// 			[11, 10, 2, 3, 5, 12, 15, 16, 0, 15, 0, 14, 12, 13, 14, 16],
// 			[5, 10, 12, 6, 10, 2, 5, 6, 10, 5, 10, 14, 8, 9, 4, 16]
// 		],
// 	},
// ]
// superimposedBar(yxcgzsfbArr[0].xData, 'gdwyxcg_legend', ['优秀成果', '优秀案例', '优秀论文'], yxcgzsfbArr[0].yData, 'gdwyxcg_yAxis', 'gdwyxcg_con')
// page_select('gdwyxcg_page', yxcgzsfbArr)
// click_page('gdwyxcg_page','gdwyxcg_con', 'gdwyxcg_yAxis', ['优秀成果', '优秀案例', '优秀论文'], yxcgzsfbArr);
 
 
 
 //先进典型数量分布
// var xjdxslfbArr = dp3_data.xjdxslfbArr;
// superimposedBar(xjdxslfbArr[0].xData, 'xjdxslfb_legend', ['个人', '集体'], xjdxslfbArr[0].yData, 'xjdxslfb_yAxis', 'xjdxslfb_con')
// dataShow('xjdxslfb_con', 'xjdxslfb_yAxis', ['个人', '集体'], xjdxslfbArr,1);
// page_select('xjdxslfb_page', xjdxslfbArr)
// click_page('xjdxslfb_page','xjdxslfb_con', 'xjdxslfb_yAxis', ['个人', '集体'], xjdxslfbArr);




 //三会一课 折线图
 function shyk_lineCharts(id,xdata, joindata, componentdata) {
	 //alert(1)
 	var myChart = echarts.init(document.getElementById(id));
 	option = {
 		color: ['#fa02f8', '#005de9'],
 		grid: {
 			top: 80,
 			bottom: 50,
 			left: 10,
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
 				},
 				formatter:function(value){
 					var str = '';
 	 				if(value.length<= 4){
 	 					str ='\n\n' +  value;
 	 				}else if(value.length >4){
 	 					str = '\n' + value.substring(0,4)+'\n'+value.substring(4,6)+'..';
 	 				}
 					return str;
 	 			}
 			},
 			
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
 							position: 'top',
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

//各单位换届完成率  折线图
 function gdwhjwcl_lineCharts(id,xdata, componentdata) {
 	var myChart = echarts.init(document.getElementById(id));
 	option = {
 		color: ['#005de9'],
 		grid: {
 			top: 50,
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
 				},
 				formatter:function(value){
 					var str = '';
 	 				if(value.length<= 4){
 	 					str ='\n\n' +  value;
 	 				}else if(value.length >4){
 	 					str = '\n' + value.substring(0,4)+'\n'+value.substring(4,6)+'..';
 	 				}
 					return str;
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
 		series: [
 			{
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
 
 
 
 
 
 