$(document).ready(function(){
    $('.hamburguer').click(function(){
         $('.sideMenu').css('left', 0);        
      }
    )
    
    $('.close').click(function(){
         $('.sideMenu').css('left', '-275px');
      }
    )
  }
)