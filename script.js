$(document).ready(function(){    
    $(".click1").click(function(){        
        $(".hide1").show();        
        $(".show1").toggle();        
    });    
    $(".click2").click(function(){        
        $(".hide2").show();        
        $(".show2").toggle();    
    });    
    $(".click3").click(function(){        
        $(".hide3").show();        
        $(".show3").toggle();    
    });    
    $('.displayin').hide();    
    $('.work').hover(function(){       
    $(this).find('.displayin').toggle(500);    
});    
$('button').click(function(){       
    var name = document.getElementById("name").value;        
    var email = document.getElementById("email").value;        
    var message = document.getElementById("message").value;       
    if(name == ""|| email ==""||message ==""){            
        alert(`check if name or email or message is empty`);        
    }        else{            
        alert(`Dear ${name}  we have received your message successfully. Feel free to reach out to us anytime.`);        
    }    
})
});



