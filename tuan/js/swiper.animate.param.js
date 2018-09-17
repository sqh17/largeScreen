// 在全局范围内创建主动画控制器与子动画控制器
var myAC_main = new animateControl("main_ani_");
// 第 1 个子swiper对象的动画参数
var swiperAnimateParam_main = {
	
	slide_1:{
		animate_left:{element:'main_ani_left', animation:'fadeInLeft',duration : '2s',},                                                   
		animate_right:{element:'main_ani_right',type:0, animation:'fadeInRight',duration : '2s',},  

		// animate_01:{element:'main_ani_01', animation:'fadeIn',duration : '1s', delay : '.5s'},
		// animate_02:{element:'main_ani_02', animation:'fadeIn',duration : '1s',delay : '1s' },
		// animate_03:{element:'main_ani_03', animation:'fadeIn',duration : '1s',delay : '2s' },
		// animate_04:{element:'main_ani_04', animation:'fadeIn',duration : '1s',delay : '2.5s' },
		// animate_05:{element:'main_ani_05', animation:'fadeIn',duration : '1s',delay : '3s' },
		// animate_06:{element:'main_ani_06', animation:'fadeIn',duration : '1s',delay : '3.5s' },

		// animate_03:{element:'main_ani_03',type:0, animation:'fadeInRight',},                                            
		// animate_04:{element:'main_ani_04',type:0, animation:'fadeInLeft',},   
		// animate_04_1:{element:'main_ani_04_1',type:0, animation:'fadeInLeft',},  
		// animate_04_2:{element:'main_ani_04_2',type:0, animation:'fadeInLeft',},
		// animate_05:{element:'main_ani_05', animation:'zoomInUp',duration : '1s', },                                   
		 animate_06:{element:'main_ani_06', animation:'zoomInDown',duration : '1s',delay : '.3s' },                      
		 animate_07:{element:'main_ani_07', animation:'zoomInDown',duration : '1s',delay : '.3s' },   
		 animate_07_1:{element:'main_ani_07_1', animation:'zoomInDown',duration : '1s',delay : '.3s' }, 
		// animate_023:{element:'main_ani_023', animation:'pulse',duration : '8s',delay : '1s' ,type:1,count : 'infinite',},
		//		党员队伍结构
		// animate_08:{element:'main_ani_08', animation:'fadeInRight',duration : '1s',delay : '.8s' },
		// animate_09:{element:'main_ani_09', animation:'fadeIn',duration : '1s',delay : '1.3s' },
		// animate_10:{element:'main_ani_10', animation:'fadeIn',duration : '1s',delay : '1.8s' },
		// animate_11:{element:'main_ani_11', animation:'fadeIn',duration : '1s',delay : '2.3s' },
		// animate_12:{element:'main_ani_12', animation:'fadeIn',duration : '1s',delay : '2.8s' },
		// animate_13:{element:'main_ani_13', animation:'fadeIn',duration : '1s',delay : '3.3s' },
		// animate_14:{element:'main_ani_14', animation:'fadeIn',duration : '1s',delay : '3.8s' },
		// animate_15:{element:'main_ani_15', animation:'fadeIn',duration : '1s',delay : '4.3s' },
		// animate_16:{element:'main_ani_16', animation:'fadeIn',duration : '1s',delay : '4.8s' },
	},
};