$(function(){
/*------------------------------------------------首页*/
{
    //首页01
    // 页面进入时加载函数
    window.item01In = function(){
        setTimeout(function(){
            $('.item01_w1').addClass('item01-in_9').removeClass('item01-out_9');
            $('.item01_w2').addClass('item01-in_sp').removeClass('item01-out_sp');
        }, 10);
        setTimeout(function(){
            $('.back_box').addClass('item01_back');
        }, 20);
        setTimeout(function(){
            $('.bor_box').removeClass('item01_bor');
        }, 30);
    };
    item01In();
    // 页面出去时加载函数
    window.item01Out = function(){
        $('.item01_w1').removeClass('item01-in_9').addClass('item01-out_9');
        $('.item01_w2').removeClass('item01-in_sp').addClass('item01-out_sp');
        $('.back_box').removeClass('item01_back');
        $('.bor_box').addClass('item01_bor');
    }

//首页02
    window.item02In = function(){ 
        setTimeout(function(){
            $('.item02_left').css('width', '50%');
        }, 10);
        setTimeout(function(){
            $('.item02-left_con').addClass('item02-left_conIn').removeClass('item02-left_conOut');
        }, 500);
    }
    window.item02Out = function(){
        $('.item02_left').css('width', '100%');
        $('.item02-left_con').addClass('item02-left_conOut').removeClass('item02-left_conIn');
    }

//首页03
    window.item03In = function(){
        setTimeout(function(){
            $('.item3_w>.w1').removeClass('w1_out').addClass('w1_in');
            $('.item03-w2_box').removeClass('w2_out').addClass('w2_in');
        }, 10);
    }
    window.item03Out = function(){
        $('.item3_w>.w1').removeClass('w1_in').addClass('w1_out');
        $('.item03-w2_box').removeClass('w2_in').addClass('w2_out');
    }

//首页04
    window.item04In = function(){
        setTimeout(function(){
            $('.item4_w>.w1').removeClass('w1_out').addClass('w1_in');
            $('.item04-w2_box').removeClass('w2_out').addClass('w2_in');
        }, 10);
    }
    window.item04Out = function(){
        $('.item4_w>.w1').removeClass('w1_in').addClass('w1_out');
        $('.item04-w2_box').removeClass('w2_in').addClass('w2_out');
    }


//页面自动加载
    window.item01 = function(){
        let item = $('.carousel-indicators li');
        //item01
        if(item.eq(0).attr('class') == 'active' || item.eq(2).attr('class') == 'active'){
            item01Out();
        }
        if(item.eq(1).attr('class') == 'active' || item.eq(3).attr('class') == 'active'){
            item01In();
        }

        //item02
        if(item.eq(1).attr('class') == 'active' || item.eq(3).attr('class') == 'active'){
            item02Out();
        }
        if(item.eq(0).attr('class') == 'active' || item.eq(2).attr('class') == 'active'){
            item02In();
        }

        //item03
        if(item.eq(0).attr('class') == 'active' || item.eq(2).attr('class') == 'active'){
            item03Out();
        }
        if(item.eq(1).attr('class') == 'active' || item.eq(3).attr('class') == 'active'){
            item03In();
        }

        //item04
        if(item.eq(1).attr('class') == 'active' || item.eq(3).attr('class') == 'active'){
            item04Out();
        }
        if(item.eq(2).attr('class') == 'active' || item.eq(0).attr('class') == 'active'){
            item04In();
        }
    }
}

/*------------------------------------------------业务*/
/*------------------------------------------------案例*/
;{
    $('.sec3_li').mouseenter(function(event) {
        $(this).children('p').css('color', '#fff');
    }).mouseleave(function(event) {
        $(this).children('p').css('color', '#333');
    });
    let i = 0;
    let ulTime = setInterval(ulSwper, 3000);
    $('.sw i').mouseenter(function(event) {
        clearInterval(ulTime);
    }).mouseleave(function(event) {
        ulTime = setInterval(ulSwper, 3000);
    });;
    $('.sw_left i').click(function(event) {
        if(i <= 0){
            return;
        }
        $('.show-li_box ul').css('margin-left', -33.33 * (i - 1) + '%');
        i --;
    });
    $('.sw_right i').click(function(event) {
        if(i >= 6){
            return;
        }
        ulSwper();
    });
    function ulSwper(){
        i ++;
        $('.show-li_box ul').css('margin-left', -33.33 * i + '%');
        if(i >= 6){
            i = -1;
        }
    }
    $('.sec3_foo>p').mouseenter(function(event) {
        $('.more_sp').finish();
        $('.more_sp').animate({
            width: '100%'
        }, 300);
    }).mouseleave(function(event) {
        $('.more_sp').finish();
        $('.more_sp').animate({
            width: '0%'
        }, 300);
    });
}

/*------------------------------------------------合作*/

{
    let ul_li = $.makeArray($('.sec4_ul li')), 
        len = (ul_li.length) / 2,
        time_ul = '',
        time_li = '',
        i = 0;
    ul_li.forEach((item, i)=>{
        if(i < len){
            $(item).css('border-bottom', '1px dotted #ddd');
        };
        //触碰抖动
        $(item).mouseenter(function(event) {
            clearInterval(time_li);
            let i = 0;
            time_li = setInterval(()=>{
                i ++;
                if(i > 40){
                    $(this).children('img').addClass('tada animated infinite');
                    setTimeout(()=>{
                        $(this).children('img').removeClass('tada animated infinite');
                    }, 800);
                }
            }, 10);

        }).mouseleave(function(event) {
            clearInterval(time_li);
        });
    });
    $('.sw4').mouseenter(function(event) {
        clearInterval(time_ul);
    }).mouseleave(function(event) {
        time_ul = setInterval(_swper('.sec4_ul>ul'), 3000);
    });
    $('.sw4_left>i').click(function(event) {
        if(i <= 0){
            return;
        }
        i --;
        $('.sec4_ul>ul').css('margin-left', (-25 * i) + '%');
    });
    $('.sw4_right>i').click(function(event) {
        swper_ul('.sec4_ul>ul');
    });
    time_ul = setInterval(_swper('.sec4_ul>ul'), 3000);
    function _swper(model){
        return function(){
            swper_ul(model);
        }
    }
    function swper_ul(model){
        i ++;
        $(model).css('margin-left', (-25 * i) + '%');
        if(i >=4){
            i = -1;
        }
    }
    
}
/*------------------------------------------------品质*/

{
    let time_ul = setInterval(swper_ul, 3000),
        i = 0,
        j = 0;
    $('.sw5').mouseenter(function(event) {
        clearInterval(time_ul);
    }).mouseleave(function(event) {
        time_ul = setInterval(swper_ul, 3000);
    });
    $('.sw5_left>i').click(function(event) {
        if(i <= 0){
            return;
        }
        i --;
        $('.sec5_ul>ul').css('margin-left', (-25 * i) + '%');
    });
    $('.sw5_right>i').click(function(event) {
        swper_ul();
    });
    function swper_ul(){
        i ++;
        $('.sec5_ul>ul').css('margin-left', (-25 * i) + '%');
        if(i >= 4){
            i = -1;
        }
    }
    let btmTime = setInterval(btmSwper_ul, 4000);
    function btmSwper_ul(){
        j ++;
        $('.sec6-btm_ul').css('margin-left', (-20 * j) + '%');
        if(j >= 10){
            j = -1;
        }
    }
}


/*------------------------------------------------关于*/

{
    let time_ul = setInterval(swper_ul, 3000),
        i = 0;
    $('.sec6-l_nav li').click(function(){
        i = $(this).index() - 1;
        swper_ul();
    });
    $('.sec6-l_nav').mouseenter(function(event) {
        clearInterval(time_ul);
    }).mouseleave(function(event) {
        time_ul = setInterval(swper_ul, 3000);
    });
    function swper_ul(){
        i ++;
        $('.sec6-r_con').css('margin-left', - (100 * i) + '%');
        $('.sec6-l_nav li').eq(i).addClass('sel6_li').siblings().removeClass('sel6_li');
        if(i >= 2){
            i = -1;
        }
    }
}

/*------------------------------------------------联系*/
})