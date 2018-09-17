//
function json_name_value($form,jsondata){
	//得到键
	var a=[];
	//得到键对应的值
	var b=[];
	 for (var item in jsondata) {
		 a.push(item);
		 b.push(jsondata[item]);
		 $form.find("[name="+item+"]").text(jsondata[item]);
	}
}
function jc_setmap(id) {
	/*地图*/
	var myChart = echarts.init(document.getElementById(id));
	//数据纯属虚构
	var option = {

		tooltip: {
			show: true, //不显示提示标签
			formatter: '{b}', //提示标签格式
			backgroundColor: "#ff7f50", //提示标签背景颜色
			textStyle: {
				color: "#fff"
			}
			//提示标签字体颜色
		},
		geo: {
			roam: false,
			map: 'china',
			//layoutCenter: ['100%'],
			//aspectScale:0.85569,
			zoom: 1.1,
			//layoutSize: '250%',
			label: {
				normal: {
					show: false, //显示省份标签
					textStyle: {
						color: "#2d2d2d"
					}
					//省份标签字体颜色
				},
				emphasis: { //对应的鼠标悬浮效果
					show: true,
					textStyle: {
						color: "#fff",
						fontSize: 45
					},

				}
			},
			itemStyle: {
				normal: {
					borderWidth: .5, //区域边框宽度
					borderColor: '#9e3605', //区域边框颜色
					areaColor: "#efb312", //区域颜色
				},
				emphasis: {
					borderWidth: 1,
					borderColor: '#e75400',
					areaColor: "#fb7b00",
				}
			},
			selectedMode: 'single',
			data: [
			],
			regions: [{
				name: '南海诸岛',
				value: 0,
				itemStyle: {
					normal: {
						opacity: 0,
						label: {
							show: false
						}
					}
				}
			}, {
				name: '北京',
				selected: true,
				value: "10500000"
			}, //北京为选中状态
			{name:'内蒙古', value:'10040352'},
			{name:'湖南', value:'10175326'},
			{name:'西藏', value:'10520000'},
			{name:'江苏', value:'10430000'},
			{name:'河南', value:'10522000'},
			{name:'辽宁', value:'10130000'},
			{name:'山东', value:'10554018'},
			{name:'黑龙江', value:'10416705'},
			{name:'四川', value:'10300000'},
			{name:'湖北', value:'10450001'},
			{name:'上海', value:'10010000'},
			{name:'安徽', value:'10330026'},
			{name:'新疆', value:'10625124'},
			{name:'浙江', value:'10250037'},
			{name:'天津', value:'10000029'},
			{name:'陕西', value:'10750030'},
			{name:'青海', value:'10797627'},
			{name:'江西', value:'10090003'},
			{name:'宁夏', value:'10605000'},
			{name:'福建', value:'10220000'},
			//{name:'冀北', value:'10683000'},
			{name:'吉林', value:'10200226'},
			{name:'山西', value:'10578000'},
			{name:'甘肃', value:'10769004'},
			{name:'河北', value:'10372265'},
			{name:'广东', value:'00000001'},
			{name:'海南', value:'00000001'},
			{name:'贵州', value:'00000001'},
			{name:'云南', value:'00000001'},
			{name:'广西', value:'00000001'},
			{name:'香港', value:'00000001'},
			{name:'澳门', value:'00000001'},
			{name:'重庆', value:'10060000'}],
		}
	};
	myChart.setOption(option);
	myChart.on('click', function(params) {
		var org_id=params.region.value;
		var name=params.name;
		console.log(org_id)
//		$.ajax({
//			type: 'get',
//			url: '/dangjian/largescreen/rest/largescreenData/queryData',
//			data: {
//				largescreenId: "7D4AEEAFA79841F4964864741A304A9F",
//				JsonObjectCodes: "page02_gcdyfwd",
//				org_id:org_id
//			},
//			//dataType: 'json',
//			async:false,
//			success: function(data) {
//				console.log(data)
//				if(data.successful == 'true'||data.successful ==true) {
//					var dp2_tx_huang_arr = data.resultValue.page02_gcdyfwd;
//		 		    $('#dp2').find('.dp2_tx_huang').each(function(i) {
//						$(this).text(dp2_tx_huang_arr[i]);
//					});
//				}
//			}
//
//		});
	});
}
//饼图
function jc_setpie(id, data) { //
	var myChart = echarts.init(document.getElementById(id));
	var scale = 1;
	var echartData = [{
		value: data[0],
		name: '隶属单位' + '\n党组织',
	}, {
		value: data[1],
		name: '直属单位' + '\n党组织',
	}, ]
	var rich = {
		yellow: {
			color: "#e12525",
			fontSize: 80 * scale,
			fontFamily: 'Britannic',
			padding: [10, 24, 10, 0],
			align: 'center'
		},
		total: {
			color: "#ffc72b",
			fontSize: 40 * scale,
			align: 'center'
		},
		white: {
			color: "#fff",
			align: 'center',
			fontSize: 14 * scale,
			padding: [10, 0]
		},
		black: {
			color: "#2d2d2d",
			align: 'center',
			//fontFamily: 'Britannic',
			lineHeight: 70,
			fontSize: 50 * scale,
			align: 'left'
		},
		blue: {
			color: '#49dff0',
			fontSize: 16 * scale,
			align: 'center'
		},
		hr: {
			borderColor: '#0b5263',
			width: '100%',
			borderWidth: 1,
			height: 0,
		}
	}
	option = {
		// backgroundColor: '#031f2d',
		title: {
			text: '单位分布',
			left: 'center',
			top: 'center',
			padding: [24, 12],
			textStyle: {
				color: '#2d2d2d',
				fontWeight: 100,
				fontFamily: 'Microsoft YaHei',
				fontSize: 72 * scale,
				align: 'center'
			}
		},
		series: [{
			name: '总考生数量',
			type: 'pie',
			radius: ['47%', '72%'],
			center: ['50%', '50%'],
			hoverAnimation: false,
			color: ['#fe7370', '#fbd264', '#72c7f3', '#034079', '#6f81da', '#00ffb4'],
			startAngle:0, 
			minAngle:5,    
			label: {
				normal: {
					formatter: function(params, ticket, callback) {
						return '{black|' + params.name + '}\n{yellow|' + params.value + '}{black|人}';
					},
					rich: rich
				},
			},
			labelLine: {
				show: false,
				normal: {
					length: 75 * scale,
					length2: 0,
					lineStyle: {
						color: '#0b5263',
						opacity: 0
					}
				}
			},
			data: echartData
		}]
	};
	myChart.setOption(option);
}
//制造假数据
function jc_set_zhuzidata(n) {
	var zhu_data = {
		xdata: [],
		ydata: [],
	};
	for(i = 0; i < n; i++) {
		zhu_data.xdata.push('上海' + jc_randomNum2(0, 99));
		zhu_data.ydata.push(i + jc_randomNum2(0, 9999));
	};
	return zhu_data;
}
//生成指定位数的随机整数
function jc_randomNum1(n) {
	var t = '';
	for(var i = 0; i < n; i++) {
		t += Math.floor(Math.random() * 10);
	}
	return t;
}
//生成指定范围内的随机整数
function jc_randomNum2(minNum, maxNum) {
	switch(arguments.length) {
		case 1:
			return parseInt(Math.random() * minNum + 1);
			break;
		case 2:
			return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
			break;
		default:
			return 0;
			break;
	}
}

//              window.onload=function(){
//                  var container = document.getElementById('jc_content') //获取容器id
//                  var prev = $('.swiper-button-prev') //左按钮
//                  var next = $('.swiper-button-next') //右按钮
//                  function play() {
//                      timer = setInterval(function() {
//                          next.click()
//                      }, 8500);
//                  }
//                  //停止切换
//                  function stop() {
//                      clearInterval(timer)
//                  }
//                  //鼠标移上去，触发自动切换事件
//                  container.onmouseover = stop; //不要加括号，
//                  container.onmouseout = play
//                      //自动切换
//                  play()
//              }