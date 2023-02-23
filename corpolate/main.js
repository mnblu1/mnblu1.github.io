$(function () {
        $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
          $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
        })
      });
      
(function(){
    // 設定
    var interval =3200; // 切り替わりの間隔（ミリ秒）
    var fade_speed = 1500;// フェード処理の早さ（ミリ秒）
    $(".fade img").hide();
    $(".fade img:first").addClass("active").show();
    
    var changeImage = function(){
            var $active = $(".fade img.active");
            var $next = $active.next("img").length?$active.next("img"):$(".fade img:first");
       
            $active.fadeOut(fade_speed).removeClass("active");
            $next.fadeIn(fade_speed).addClass("active");
    }
    
    
    setInterval(changeImage,interval);
    }());