$(function(){
  // $('quanxuan').change(function())

  // 1.全选操作
  $('.checkall').change(function(){
    // console.log($('.checkall').prop('checked'))
    // $('.j-checkbox').prop('checked', false)
    
    //-------------------------------------------------------------------------------------------bug 1
    // $('.j-checkbox, .checkall').prop('checked', $('.checkall').prop('checked'))

    $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'))
  })

  // 2.单选操作
  $('.j-checkbox').change(function(){
    if($('.j-checkbox:checked').length == $('.j-checkbox').length){
      //-------------------------------------------------------------------------------------------bug 2
      // $('.checkall').prop('checked', $(this).prop('checked'))
      $('.checkall').prop('checked', true)
    }else {
      $('.checkall').prop('checked', false)
    }
  })

  // 3. 加减号操作
  //------------------------------------------------------------------------注意， 循环绑定事件里面 一定用this
  $('.increment').click(function(){
    // 转换为jquery 对象  $(this), 不能加引号
    console.log( $(this), $(this).siblings(), $(this).siblings('.itxt'), $(this).siblings('.itxt').val())
    var num = parseInt($(this).siblings('.itxt').val());
    num++;
    $(this).siblings('.itxt').val(num)
  })

  $('.decrement').click(function(){
    console.log( $(this), $(this).siblings(), $(this).siblings('.itxt'), $(this).siblings('.itxt').val())
    var num = parseInt($(this).siblings('.itxt').val());
    if(num == 1){
      return false;
    }
    num--;
    $(this).siblings('.itxt').val(num)
  })
})