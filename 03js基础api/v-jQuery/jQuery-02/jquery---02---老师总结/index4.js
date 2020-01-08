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


    // 4. 计算小计的价格
    
    //----------------------------------------------------注意， 获取元素一定以当前 点击的元素为基础，通过父子兄的关系获取
    var price = $(this).parent().parent().siblings('.p-price').text();
    console.log(price)
    //------------------------------------------------------------------------------bug3 字符串不能直接相乘，报错NaN
    // var perSum = parseFloat(price) * num;    
    price = price.substr(1);
    var perSum = parseFloat(price) * num;
    console.log(perSum.toFixed(2))
    var perSumStr = '￥' + perSum.toFixed(2); // 3 --- '￥' + 3
    $(this).parent().parent().siblings('.p-sum').text(perSumStr);
  })

  $('.decrement').click(function(){
    console.log( $(this), $(this).siblings(), $(this).siblings('.itxt'), $(this).siblings('.itxt').val())
    var num = parseInt($(this).siblings('.itxt').val());
    if(num == 1){
      return false;
    }
    num--;
    $(this).siblings('.itxt').val(num)


    // 计算
    var price = $(this).parent().parent().siblings('.p-price').text();
    price = price.substr(1);
    var perSum = parseFloat(price) * num;
    var perSumStr = '￥' + perSum.toString();
    $(this).parent().parent().siblings('.p-sum').text(perSumStr);
  })
})