//第一屏回显
dp1_ajax();
//定时刷新第一屏
setInterval(function() {  dp1_ajax();}, 3600000);
function dp1_ajax(){
	$.ajax({
		type: 'get',
		url: '/dangjian/largescreen/rest/largescreenData/queryData',
		data: {
			largescreenId: "7D4AEEAFA79841F4964864741A304A9F",
			JsonObjectCodes: "page01_sd,page01_dzzgk,page01_dzzlsgx"
		},
		//dataType: 'json',
		async: false,
		success: function(data) {
			console.log(data)
			if(data.successful == 'true' || data.successful == true) {
				var dp1_data = data.resultValue;
				var jtsj = dp1_data.page01_sd;
				var dzzgk = dp1_data.page01_dzzgk;
				var lsgx = dp1_data.page01_dzzlsgx;
				jtsj.page01_sd16=parseFloat(jtsj.page01_sd16).toFixed(1);
				dzzgk.SUM_DY = parseFloat(dzzgk.SUM_DY / 10000).toFixed(2);
				dzzgk.LT_DY = parseFloat(dzzgk.LT_DY / 10000).toFixed(2);
				lsgx.df.unshift(arr_sum(lsgx.df));
				lsgx.xtn.unshift(arr_sum(lsgx.xtn));
				json_name_value($('#dp1'), jtsj);
				json_name_value($('#dp1'), dzzgk);
				jc_each($('.dp1_lsgx_txtul1 li .big'), lsgx, 'xtn');
				jc_each($('.dp1_lsgx_txtul2 li .big'), lsgx, 'df');
			};
		}
	});
}
	//第二屏回显
//定时刷新第二页
dp2_ajax();
setInterval(function() {
	dp2_ajax();
}, 3600000);
function dp2_ajax(){
	$.ajax({
		type: 'get',
		url: '/dangjian/largescreen/rest/largescreenData/queryData',
		data: {
			largescreenId: "7D4AEEAFA79841F4964864741A304A9F",
			JsonObjectCodes: "page02_dyzb,page02_zczb,page02_gsdyzb,page02_zbdyzb,page02_ljdyfz,page02_gcdyfwd,page02_dnbzqk,page02_fzdys,page02_mhsp",
			org_id: '00000001'
		},
		//dataType: 'json',
		async: false,
		success: function(data) {
			console.log(data)
			if(data.successful == 'true' || data.successful == true) {
				var dp2_data = data.resultValue;
				var dp2_tx_huang_arr = dp2_data.page02_gcdyfwd;
				var dnbzqk = dp2_data.page02_dnbzqk;
				var fzdy=dp2_data.page02_fzdys;
				var dp2_video=dp2_data.page02_mhsp;
				//发展党员数
				 //获取完整的日期
				var date=new Date;
				var month=date.getMonth()+1; 
				var fzdys=dp2_data.page02_fzdys.fzdys;
				var fzyxdys=dp2_data.page02_fzdys.fzyxdys;
				var gsdyzb=dp2_data.page02_gsdyzb;
				var zbdyzb=dp2_data.page02_zbdyzb;
				json_name_value($('#pie_dyzb'), dp2_data.page02_dyzb);
				json_name_value($('#pie_zczb'), dp2_data.page02_zczb);
				json_name_value($('#pie_gsdyzb'), gsdyzb);
				json_name_value($('#pie_zbdyzb'), zbdyzb);
				$('#gszb_percent').text(parseFloat(gsdyzb.bk+gsdyzb.yjs).toFixed(2));
				$('#zbzb_percent').text(parseFloat(zbdyzb.bk+zbdyzb.yjs).toFixed(2));
				json_name_value($('#dp2'), dp2_data.page02_ljdyfz);
				//发展党员数
				var fzdys_percent=[];
				for(var i=0;i<fzdys.length;i++){
					fzdys_percent.push(parseFloat((fzyxdys[i]/fzdys[i])*100).toFixed(1))
				};
				jc_each($('.dp2_dwjg_part2_txtul1 li'),dp2_data.page02_fzdys,'fzdys');
				$('#fzdy_parcent div').each(function(i){
					$('#fzdy_parcent div').eq(i).text(fzdys_percent[i]);
				});
				$('#fzdys_yue').text(month);
//				$('#dp2').find('.dp2_tx_huang').each(function(i) {
//					$(this).text(dp2_tx_huang_arr[i]);
//				});
				
				$('.dp2_bzqk_part1 .big').each(function(i) {
					$('.dp2_bzqk_part1 .big').eq(i).text(dnbzqk.SBJ[i]);
					$('.dp2_bzqk_part2 .big').eq(i).text(dnbzqk.QG[i]);
					$('.dp2_bzqk_part3 .big').eq(i).text(dnbzqk.ZYQY[i]);
					$('.dp2_bzqk_part4 .big').eq(i).text(dnbzqk.GJDWGS[i]);
				});								
	            var $video_wrapper=$('.dp2_video_box .swiper-wrapper');
	            $video_wrapper.empty();
				for(var i=0;i<1;i++){
					var video_dom='<video  class="swiper-slide" id="myVideo" width="100%" height="100%" autoplay="autoplay">';
					video_dom+='<source title="'+dp2_video[i].TITLE+'" src="'+dp2_video[i].URI+'" type="video/mp4"></source> </video>';							          
					//video_dom+='<source title="'+dp2_video[i].TITLE+'" type="video/mp4"></source> </video>';							          
					$('#dp2').find('.dp2_tx_hong').eq(i).text(dp2_video[i].TITLE);
					$video_wrapper.append(video_dom);
				};
				var mySwiper2 = new Swiper('.swiper-container2', {
						direction: 'horizontal',
						//loop: true,
						//autoplay: 2000,
						// 如果需要分页器
						pagination: {
							el: '.swiper-pagination',
						},
						onInit: function(swiper) {
							var $wrapper = $(swiper.wrapper);
							var myVideo=$wrapper.find('#myVideo');
							var comtainer = document.getElementById('dp2_video');
							comtainer.onmouseenter = function() {
								swiper.stopAutoplay();
							};
							comtainer.onmouseleave = function() {
								swiper.startAutoplay();
							};
							$wrapper.parent().siblings('#dp2_video').find('.video_play').on('click', function() {
								if(!myVideo.paused) {
		                            console.log('pause')
									myVideo.get(0).pause();
									myVideo.paused = true;
								} else {
									console.log('play')
									myVideo.get(0).play();
									myVideo.paused = false;
								}
							});
							
						},
						onSlideChangeEnd: function(swiper) {
							var $wrapper = $(swiper.wrapper);
							var myVideo=$(swiper.wrapper).find('video').eq(swiper.activeIndex);
							var title=$(swiper.wrapper).find('source').eq(swiper.activeIndex).attr('title');
							$('#dp2').find('.dp2_tx_hong').text(title);
						},
						//								    
						//								    // 如果需要前进后退按钮
						//								    navigation: {
						//								      nextEl: '.swiper-button-next',
						//								      prevEl: '.swiper-button-prev',
						//								    }
					})
			}
		}

	});
};
function arr_sum(arr) {
	var s = 0; //注意，如果改为var s,结果是NAN，
	for(var i = arr.length - 1; i >= 0; i--) {
		s += arr[i]; //不可以直接var s+=arr[i]
	}
	return s;
}

function jc_each($dom, data, name) {
	$dom.each(function(i) {
		$dom.eq(i).text(data[name][i]);
	});
}