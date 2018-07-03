//鼠标滚动事件

$(function(){
    let i = 0, below = 0, top = 0, status = true;
    function staHeader(){
        if(i > 0){
            $('.header').animate({
                'height': '60px',
                'line-height': '60px'
            }, 100);
            $('.h_con li').css({
                'font-size': '16px'
            });
            $('.h-r_con').css('transform', 'scale(.8)').animate({
                'margin-top': '13px'
            }, 100);
            $('.h_left img').css({
                'transform': 'scale(0.8)'
            });
        }else{
            $('.header').animate({
                'height': '80px',
                'line-height': '80px'
            }, 100);
            $('.h_con li').css({
                'font-size': '20px'
            });
            $('.h-r_con').css('transform', 'scale(1)').animate({
                'margin-top': '23px'
            }, 100);
            $('.h_left img').css({
                'transform': 'scale(1)'
            });
        }
    }
    $('body').bind('mousewheel', function(event, delta) {
        staHeader();
        if(status){
            if(delta == -1){
                i ++;
                if(i >= $('section').length){
                    i = $('section').length - 1;
                }
                goBelow(i);
                status = false;
            }else{
                if(i <= 0){
                    i = 1;
                }
                goTop(i);
                i --;
                status = false;
            }   
        }
    });
    function goBelow(i){
        $('.sec'+i).animate({
            height: 0,
        }, 400, function(){
            $(this).css('display', 'none');
        });
        $('.h_con span').eq(i).animate({
            width: '100%'
        }, 400, function(){
            status = true;
        });
        $('.h_con span').eq(i - 1).animate({
            width: 0
        }, 400);
        $('.h_con li').eq(i - 1).removeClass('sel_page');
        $('.h_con li').eq(i).addClass('sel_page');
    };
    function goTop(i){
        $('.sec'+i).finish().css('display', 'block').animate({
            height: '100%',
        }, 400, function(){});
        $('.h_con span').eq(i).finish().animate({
            width: 0
        }, 400);
        $('.h_con span').eq(i - 1).finish().animate({
            width: '100%'
        }, 400, function(){
            status = true;
        });
        $('.h_con li').eq(i).removeClass('sel_page');
        $('.h_con li').eq(i - 1).addClass('sel_page');
    }

/*------------------------------------------------头部导航*/

    $('.h_con li').click(function(event) {
        $('.h_con span').animate({
            width: 0
        }, 400);
        $(this).addClass('sel_page').siblings().removeClass('sel_page');
        let index = $(this).index() + 1,
            len = $('.h_con li').length + 1;
        i = index - 1;
        for(let t = 0; t < index; t ++){
            $('.sec'+t).animate({
                height: 0,
            }, 400, function(){
                $(this).css('display', 'none');
            });
        }
        for(let b = index; b < len; b ++){
            $('.sec'+b).css('display', 'block').animate({
                height: '100%'
            }, 400, function(){});
        };
        $('.h_con span').eq(i).finish().animate({
            width: '100%'
        }, 400);
        staHeader();
    });

    $('.banner-down').click(function(){ 
        i = 1;goBelow(i);staHeader();
    })

})