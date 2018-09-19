$(function() {
    // 在文档结构加载完成之后，载入swiper幻灯片，并初始化所有的动画控制器
    $(document).ready(function() {
        // 第 1 个子swiper幻灯片
        var mySwiper_main = new Swiper('.swiper-container-main', {
            direction: 'horizontal',
            grabCursor: true,
            //loop: true,
            onInit: function(swiper) {
                console.log(swiper)
                myAC_main.init(swiperAnimateParam_main, swiper);
                // 地图下部的列表数据渲染
                var dp2_tx_huang_arr = ['9.5', '4186', '566', '292'];
                var $wrapper = $(swiper.wrapper);
                $wrapper.find('.dp2_tx_huang').each(function(i) {
                    $(this).text(dp2_tx_huang_arr[i])
                });
                // 团内会议数据渲染
                var tnhy_arr = [580,1140,20000];
                $wrapper.find('.pro-progress').each(function(i){
                    $(this).data('progressData',tnhy_arr[i]);
                    console.log($(this).data('progressData'))
                })

            },
            onSlideChangeEnd: function(swiper) {
                myAC_main.play();
            },
        });
        
        
    });
    /*地图*/
    var myChart = echarts.init(document.getElementById('china_map'));
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
                    },
                    //省份标签字体颜色
                },
                emphasis: { //对应的鼠标悬浮效果
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize:35
                    },

                },
                
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
            data: [{
                    name: '北京',
                    selected: true,
                    value: "10500000"
                }, //北京为选中状态
                {
                    name: '天津',
                    value: "10000029"
                }, {
                    name: '江苏',
                    value: "10430000"
                }, {
                    name: '浙江',
                    value: "10250037"
                }
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
            }],
        }
    };
    myChart.setOption(option);
    myChart.on('click', function(params) {
        console.log(params);
        if(params.name == '黑龙江') {
            var dp2_tx_huang_arr = ['1.5', '16', '166', '192'];
            $('.dp2_tx_huang').each(function(i) {
                $(this).text(dp2_tx_huang_arr[i])
            });
        }
    });

    // 队伍结构点击
    $('.dwjg-bg li').on('click',function(){
        $(this).find('img').css('opacity','1');
        $(this).siblings().each(function(){
            $(this).find('img').css('opacity','0');
        })
    })
    // 团内会议
    //	根据情况，判断数组中最大的值作为 进度条的100%
    var tnhy_arr = [10,500,100];
    var orgin = tnhy_arr.concat([]); // 保留原数组
    var max = tnhy_arr.sort(function(a,b){
        return a<b;
    })
    $('#right_tnhy_lis .lis-comm-content .numbers').each(function(i) {
        if(orgin[i] == 0){
            $(this).text(orgin[i]);
            $(this).parent().css({
                top:'-50px',
                right:'-200px'
            })
            $(this).parent().siblings('.lis-comm-icon').hide();
        }else{
            $(this).text(orgin[i]);
            $(this).parent().siblings('.lis-comm-middle').width(parseInt(1000 * orgin[i] / max[0]))
        }
    });	
    var data1 =[{name:'北京公司',value:32},{name:'天津公司',value:2},{name:'江苏公司',value:0},{name:'山东公司',value:12},{name:'山西公司',value:22},{name:'陕西公司',value:16},{name:'湖北公司',value:8},{name:'湖南公司',value:12},{name:'河南公司',value:14},{name:'河北公司',value:12},{name:'安徽公司',value:30},{name:'浙江公司',value:28},{name:'电科院',value:12},{name:'南瑞集团',value:22},{name:'信筒集团',value:12},{name:'新疆公司',value:14},]
    var data = [[{name:'北京公司',value:39},{name:'天津公司',value:2},{name:'江苏公司',value:0},{name:'山东公司',value:12},{name:'山西公司',value:22},{name:'陕西公司',value:16},{name:'湖北公司',value:8},{name:'湖南公司',value:12},{name:'河南公司',value:14},{name:'河北公司',value:12},{name:'安徽公司',value:30},{name:'浙江公司',value:28},{name:'电科院',value:12},{name:'南瑞集团',value:22},{name:'信筒集团',value:12},{name:'新疆公司',value:14}],
                [{name:'北京公司北京公司',value:12},{name:'天津公司1',value:15},{name:'江苏公司1',value:32},{name:'山东公司1',value:10},{name:'山西公司',value:2},{name:'陕西公司',value:6},{name:'湖北公司湖北公司',value:12},{name:'湖南公司',value:32},{name:'河南公司',value:38},{name:'河北公司',value:22},{name:'安徽公司',value:30},{name:'浙江公司',value:28},{name:'电科院',value:12},{name:'南瑞集团',value:22},{name:'信筒集团',value:12},{name:'新疆公司',value:14}],
                [{name:'北京公司2',value:2},{name:'天津公司2',value:1},{name:'江苏公司2',value:3},{name:'山东公司2',value:0},{name:'山西公司',value:15},{name:'陕西公司',value:18},{name:'湖北公司',value:18},{name:'湖南公司',value:22},{name:'河南公司',value:14},{name:'河北公司',value:0},{name:'安徽公司',value:30},{name:'浙江公司',value:28},{name:'电科院',value:12},{name:'南瑞集团',value:22},{name:'信筒集团',value:12},{name:'新疆公司',value:14}],]

    
    // 团组织团课开展数量
    render(data[0],'right_tzztk', 'gold')
    page_select('right_tzztk', data)
    // 推优入党人数
    render(data[0],'right_tyrdrs','blue')
    page_select('right_tyrdrs', data)
    // 团组织开展活动数量
    render(data[0],'right_tzzkzhdsl','red')
    page_select('right_tzzkzhdsl', data)
    
    // 定时刷新
    setInterval(()=>{
        data = [[{name:'北公司',value:39},{name:'天津公司',value:2},{name:'江苏公司',value:0},{name:'山东公司',value:12}],
                [{name:'北公司北京公司',value:12},{name:'天津公司1',value:15},{name:'江苏公司1',value:32},{name:'山东公司1',value:10},{name:'山西公司',value:2},{name:'陕西公司',value:6},{name:'湖北公司湖北公司',value:12},{name:'湖南公司',value:32},{name:'河南公司',value:38},{name:'河北公司',value:22},{name:'安徽公司',value:30},{name:'浙江公司',value:28},{name:'电科院',value:12},{name:'南瑞集团',value:22},{name:'信筒集团',value:12},{name:'新疆公司',value:14}]]

        // 团组织团课开展数量
        page_select('right_tzztk', data);
        // 推优入党人数
        page_select('right_tyrdrs', data);
        // 团组织开展活动数量
        page_select('right_tzzkzhdsl', data);
    },10000)
    // 自动播放
    setInterval(function(){
        $('.page-number .next-arrow').click();
    },2000)

    // 渲染函数
    function render(data, id, color) {
        var y_data = [];
        for(var i = 0;i < data.length;i++){
            y_data.push(data[i].value)
        }
        // y轴数值
        var YAxisMax = Math.ceil(Math.max.apply(null, y_data)); // 获取最大值
        //y轴的刻度尺数值分布
        var yAxis = '';
        for(var i = 0; i < 3; i++) {
            yAxis += '<li>' + Math.ceil(YAxisMax * (1 - 0.4 * i)) + '</li>'
        }
        yAxis +='<li>0</li>';
        $('#'+id+' .charts-left-num').append(yAxis);
        var xdata = '';
        for(var i = 0;i<data.length;i++){
            if(color == 'red'){
                xdata +='<li><div class="charts-column"><div class="column-bottom red-column-bottom" style="height:'+ Math.round(data[i].value / YAxisMax * 100) +'%"><div class="column-tip">'+data[i].value+'</div></div><div class="column-top red-column-top"></div></div><div class="charts-con">'+ data[i].name +'</div></li>'
            }else if(color == 'blue'){
                xdata +='<li><div class="charts-column"><div class="column-bottom blue-column-bottom" style="height:'+ Math.round(data[i].value / YAxisMax * 100) +'%"><div class="column-tip">'+data[i].value+'</div></div><div class="column-top blue-column-top"></div></div><div class="charts-con">'+ data[i].name +'</div></li>'
            }else if(color == 'gold'){
                xdata +='<li><div class="charts-column"><div class="column-bottom column-bottom" style="height:'+ Math.round(data[i].value / YAxisMax * 100) +'%"><div class="column-tip">'+data[i].value+'</div></div><div class="column-top column-top"></div></div><div class="charts-con">'+ data[i].name +'</div></li>'
            }
            
        }
        $('#'+id+' .charts-content').append(xdata);
        //当前行数据为0时或者为1，2，3时，该行数值的存放位置
        $(".charts-column .column-bottom").each(function() {
            if($(this).height() == 0) {
                $(this).height(0);
                $(this).siblings('.column-top').hide();
                $(this).find('.column-tip').css('top', '-75px');
            }
            if($(this).find('.column-tip').text() == 1 ||$(this).find('.column-tip').text() == 2 || $(this).find('.column-tip').text() == 3){
                $(this).find('.column-tip').css('top', '-65px');
            }
        });

    }

    // 分页
    /*
        id 当前模块的总id；
        data 数据
    */
    function page_select(id, data) {
        $('#' + id+ ' .page-number').empty();
        var str = '<i class="pre-arrow"></i>'
        for(var i = 0; i < data.length; i++) {
            if(i == 0) {
                str += '<i class="circle-number circle-select"></i>'
            } else {
                str += '<i class="circle-number"></i>'
            };
        };
        str += '<i class="next-arrow"></i>'
        $('#' + id+ ' .page-number').append(str);

        //向后
        $('#' + id+ ' .page-number').on("click", ".next-arrow", function() {
            
            var _this = $(this).siblings('.circle-number.circle-select').index();
            $(this).siblings('.circle-number').eq(_this).addClass('circle-select').siblings('.circle-number').removeClass('circle-select');
            if(_this == data.length) {
                _this = 0;
                $(this).siblings('.circle-number').eq(0).addClass('circle-select').siblings('.circle-number').removeClass('circle-select');
            }
            dataShow(data, _this, id);
        });
        //向前
        $('#' + id+ ' .page-number').on("click", ".pre-arrow", function() {
            var _this = $(this).siblings('.circle-number.circle-select').index() - 2;
            $(this).siblings('.circle-number').eq(_this).addClass('circle-select').siblings('.circle-number').removeClass('circle-select');
            if(_this == -1) {
                _this = data.length - 1;
                $(this).siblings('.circle-number').eq(data.legnth - 1).addClass('circle-select').siblings('.circle-number').removeClass('circle-select');
            }
            dataShow(data, _this, id);
            
        });
        //圆点
        $('#' + id+ ' .page-number' + " .circle-number").click(function(e) {
            var _this = $(this).index() - 1;
            $(this).addClass('circle-select').siblings('.circle-number').removeClass('circle-select');
            dataShow(data, _this, id);
        });
    };

    // 数据回显
    /*
        data： 数据，必须是[[{},{}],[{},{}]]的形式，其中里面的数组作为分页来判断。
        index: 索引，点击时data的索引。
        id： 当前模块的总id。
    */
    function dataShow(data,index,id){
        var y_data = [];
        for(var i = 0;i < data[index].length;i++){
            y_data.push(data[index][i].value)
        }
        // y轴数值
        var YAxisMax = Math.ceil(Math.max.apply(null, y_data)); // 获取最大值；
        // y轴刻度
        $('#'+id+' .charts-left-num').find('li').each(function(i) {
            $(this).text(Math.ceil(YAxisMax * (1 - 0.4 * i)))
        })
        $('#'+id+' .charts-left-num').find('li').eq(3).text(0);
        $('#' + id+' .charts-content').find('li').each(function(i) {
            if(typeof data[index][i] != 'undefined'){
                var _value = data[index][i].name;
                var values = '';
                
                if(_value.legnth <= 4){
                    values =  _value;
                    $(this).find('.charts-con').text(values);
                }else if(_value.length > 4 && _value.length <= 10){
                    values =  _value.substring(0,4) + '\n' + _value.substring(4,_value.legnth - 1);
                    $(this).find('.charts-con').text(values);
                    $(this).find('.charts-con').css({
                        bottom:'-124px',
                        lineHeight:'initial'
                    })
                }
                
                $(this).find('.column-bottom').height(Math.round(data[index][i].value / YAxisMax * 100)+'%');
                $(this).find('.column-tip').text(data[index][i].value);
    
            }
        });
        $('#' + id +" .charts-column").find('.column-bottom').each(function(i) {
            if(typeof data[index][i] != 'undefined'){
                if($(this).find('.column-tip').text() == 0) {
                    $(this).height(0);
                    $(this).siblings('.column-top').hide();
                    $(this).find('.column-tip').css('top', '-65px');
                }else if($(this).find('.column-tip').text() != 0){
                    $(this).height(Math.round(data[index][i].value / YAxisMax * 100)+'%')
                    if($(this).find('.column-tip').text() == 1 ||$(this).find('.column-tip').text() == 2 || $(this).find('.column-tip').text() == 3 || $(this).find('.column-tip').text() == 0){
                        $(this).find('.column-tip').css('top', '-65px');
                        $(this).siblings('.column-top').show();
                    }else{
                        $(this).siblings('.column-top').show();
                        $(this).find('.column-tip').css('top', '50%');
                    }
                }
            }
        });
    }
    
})