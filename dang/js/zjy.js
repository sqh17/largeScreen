// 党员集体参加学习情况
function g_dyjtcjxxqk(id,data){
    var xxqkChart = echarts.init(document.getElementById(id));
    var xxqk_option = {
        grid: {
            containLabel: true,
            bottom: 40,
            top: 40,
            left: 76,
            right: 92,
        },
	tooltip: {
            padding:30,
            trigger: 'axis',
            backgroundColor: '#fff',
            textStyle: {
                color: '#000',
                fontSize:50,
            },
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
    },
	xAxis: {
		type: 'category',
		nameTextStyle: {
			fontSize: 50
		},
		data: data.xdata,
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLabel: { //调整x轴的lable
			margin: 90,
			textStyle: {
				fontSize: 50 // 让字体变大
			},
			padding: [5, 0, 0, 2]
		},
		// boundaryGap: ['35%'],
	},
	yAxis: {
		name: '(小时)',
		nameTextStyle: {
			fontSize: 50,
			padding: [0, 0, 0, 226],
		},
		nameGap: -20,
		type: 'value',
		splitLine: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLabel: { //调整y轴的lable
			margin: 39,
			textStyle: {
				fontSize: 50 // 让字体变大
			},
			padding: [0, 2, 0, 0]
		},
		"minInterval":1,
        "precision": 0
		// boundaryGap:[0.2,0]
	},
	series: [{
		data: data.ydata,
		name:'集体学习时间',
		type: 'line',
		showSymbol: false,
		//smooth: true,
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#e1a99c'
				}, {
					offset: 1,
					color: '#e1c0bd'
				}])
			}
		},
		itemStyle: {
			normal: {
				lineStyle: {
					width: 8, //折线宽度
				},
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#e76027'
				}, {
					offset: 1,
					color: '#bc2d16'
				}])
			},
		},
	}]
};
xxqkChart.setOption(xxqk_option);
}


// 中心组学习情况
function g_zxzxxqk(id,data){
    var zxzxxqkChart = echarts.init(document.getElementById(id));
    var zxzxxqk_option = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#ffffff',
            padding: 30,
            textStyle: {
                color: '#000',
                fontSize:50,
            },
            axisPointer: {
                lineStyle: {
                    color: '#b91c8c'
                }
            },

        },
        grid: {
            left: 34,
            right: 74,
            top: 200,
            bottom: 40,
            show: true,
            borderColor: '#fff',
            containLabel: true,

        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: { //调整x轴的lable
                margin:30,
                textStyle: {
                    fontSize: 50 // 让字体变大
                },
                padding: [20, 0, 0, 0],
                color: '#000'
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ffffff'
                }
            },
            axisTick: {
                show: false
            },
            data:data.xdata,
        },
        yAxis: {
            type: 'value',
            nameTextStyle: {
                fontSize: 50
            },
            axisLabel: { //调整y轴的lable

                textStyle: {
                    fontSize: 50 // 让字体变大
                },
                padding: [0, 100, 0, 0],
                color: '#000'
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ffffff'
                }
            },
            axisTick: {
                show: false
            },
            "minInterval":1,
	        "precision": 0
        },
        series: [{
            name: '集体学习次数',
            type: 'line',
            symbol:'circle',//拐点样式
            symbolSize: 16,//拐点大小
            showSymbol:false,//hover 显示拐点
            itemStyle: {
                color: '#005de9',
                lineStyle: {
                    width: 8, //折线宽度
                },
            },
            data:data.ydata1,
        },{
            name: '专题调研次数',
            type: 'line',
            symbol:'circle',//拐点样式
            symbolSize: 16,//拐点大小
            showSymbol:false,//hover 显示拐点
            //   label:{
            //       show:true,
            //       padding: [3, 4, 5, 26]
            //   },拐点数字
            itemStyle: {
                color: '#fb02f8',//线条颜色
                borderColor:'#fb02f8',
                //	borderWidth:6,
            },
            data: data.ydata2
        }]
    };
    zxzxxqkChart.setOption(zxzxxqk_option);

}

// 党组织书记讲党课情况
function g_dzzsjjdkqk(id,data) {
    var jdkqkChart = echarts.init(document.getElementById(id));
    var jdkqk_option = {
        grid: {
            containLabel: true,
            bottom: 40,
            top: 240,
            left: 76,
            right: 92,
        },
        tooltip: {
            padding:30,
            trigger: 'axis',
            backgroundColor: '#fff',
            textStyle: {
                color: '#000',
                fontSize:50,
            },
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    fontSize: 50
                },
                padding: [105, 0, 0, 2],
            },
            data: data.xdata,
        },
        yAxis: {
            type: 'value',
            splitLine: false,
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 50
                },
                padding: [0, 98, 0, 0],
            },
            axisTick: {
                show: false
            },
            boundaryGap: true,
            "minInterval":1,
	        "precision": 0
        },
        series: [{
            name: '讲党课次数',
            data: data.ydata,
            type: 'line',
            //symbol:'circle',//拐点样式
            symbolSize: 18,//拐点大小
            showSymbol:false,//hover 显示拐点
            //smooth: true,//平滑曲线
            itemStyle: {

                normal: {
                    borderColor:'#e76027',
                    borderWidth:18,
                    lineStyle: {
                        width: 12, //折线宽度
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#e76027'
                    }, {
                        offset: 1,
                        color: '#bc2d16'
                    }])
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#e1a99c'
                    }, {
                        offset: 1,
                        color: '#e1c0bd'
                    }])
                }
            },
        }]
    };
    jdkqkChart.setOption(jdkqk_option);
}