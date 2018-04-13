window.onload = function(){
    $(p1).on('click',function(){
        $(images).css({
          transform: 'translateX(0)'
        })         
      })
      $(p2).on('click',function(){
        $(images).css({
          transform: 'translateX(-200px)'
        })         
      })
      $(p3).on('click',function(){
        $(images).css({
          transform: 'translateX(-400px)'
        })         
      })
}