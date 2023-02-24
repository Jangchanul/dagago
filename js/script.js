$(document).ready(function () {
    $(".ch1").click(function(){
        $(this).hide()
        $(this).siblings(".ch11").show()
    })
    $(".ch1212").click(function(){
        $(".result").show()
    })
    $(".main1 .bt_1").click(function(){
        $(".main1").hide()
        $(".main2").show()
    })
    $(".brl .cancel").click(function(){
        $(".rt_box").hide()
    })
    $(".ch2 button").click(function(){
        $(".rt_box").show()
    })
    $(".reservation_info .bt_1").click(function(){
        $(".popup").css({"display":"block"})
    })
    $(".reservation_info .bt_cancel").click(function(){
        $(".popup1").css({"display":"block"})
    })
    $(".my_page .out").click(function(){
        $(".popup").css({"display":"block"})
    })
    $(".privacy .out").click(function(){
        $(".popup").css({"display":"block"})
    })
    $(".popup .plus").click(function(){
        $(".popup").css({"display":"none"})
        $(".popup3").css({"display":"block"})
    })
    $(".popup1 .plus").click(function(){
        $(".popup1").css({"display":"none"})
        $(".popup2").css({"display":"block"})
    })
    $(".popup .close").click(function(){
        $(".popup").css({"display":"none"})
    })
    $(".popup1 .close").click(function(){
        $(".popup1").css({"display":"none"})
    })
    $(".popup2 .close").click(function(){
        $(".popup2").css({"display":"none"})
    })
    $(".after").click(function(){
        $(".modal2").fadeIn();
      });
      
      $(".modal_content2").click(function(){
        $(".modal2").fadeOut();
    });
    $(".before").click(function(){
        $(".modal1").fadeIn();
      });
      
      $(".modal_content1").click(function(){
        $(".modal1").fadeOut();
    });
    $(".checkbox_group").on("click", "#check_all", function () {
        var checked = $(this).is(":checked");
      
        if(checked){
            $(this).parents(".checkbox_group").find('input').prop("checked", true);
        } else {
            $(this).parents(".checkbox_group").find('input').prop("checked", false);
        }
    });
    $(".checkbox_group").on("click", ".normal", function() {
        var checked = $(this).is(":checked");
      
        if (!checked) {
            $("#check_all").prop("checked", false);
        }
    });
    $(".chart").click(function(){
        $(".chart_box").show()
    })
    $(".chart_box").click(function(){
        $(this).hide()
    })
});
