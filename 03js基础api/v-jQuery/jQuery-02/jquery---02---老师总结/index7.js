$(function(){
  // $('quanxuan').change(function())

  // 1.全选操作  --- 5min
  $('.checkall').change(function(){
    // console.log($('.checkall').prop('checked'))
    // $('.j-checkbox').prop('checked', false)
    
    //-------------------------------------------------------------------------------------------bug 1
    // $('.j-checkbox, .checkall').prop('checked', $('.checkall').prop('checked'))

    $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'))
  })

  // 2.单选操作   --- 5min
  $('.j-checkbox').change(function(){
    if($('.j-checkbox:checked').length == $('.j-checkbox').length){
      //-------------------------------------------------------------------------------------------bug 2
      // $('.checkall').prop('checked', $(this).prop('checked'))
      $('.checkall').prop('checked', true)
    }else {
      $('.checkall').prop('checked', false)
    }
  })

  // 3. 加减号操作 --- 8min
  //------------------------------------------------------------------------注意， 循环绑定事件里面 一定用this
  $('.increment').click(function(){
    // 转换为jquery 对象  $(this), 不能加引号
    console.log( $(this), $(this).siblings(), $(this).siblings('.itxt'), $(this).siblings('.itxt').val())
    var num = parseInt($(this).siblings('.itxt').val());
    
    if(parseFloat(num).toString() == 'NaN'){
      num = 0;
    }
    num++;
    $(this).siblings('.itxt').val(num)


    // 4. 计算小计的价格 ---- 6min
    
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

    getSum()
  })

  $('.decrement').click(function(){
    console.log( $(this), $(this).siblings(), $(this).siblings('.itxt'), $(this).siblings('.itxt').val())
    var num = parseInt($(this).siblings('.itxt').val());
    if(parseFloat(num).toString() == 'NaN'){
      num = 1;
      $(this).siblings('.itxt').val(1)
    }
    if(num == 1){
      return false;
    }
    num--;
    $(this).siblings('.itxt').val(num)


    // 计算小计
    var price = $(this).parent().parent().siblings('.p-price').text();
    price = price.substr(1);
    var perSum = parseFloat(price) * num;
    var perSumStr = '￥' + perSum.toString();
    $(this).parent().parent().siblings('.p-sum').text(perSumStr);

    getSum()
  })

    // ---4min
  $('.itxt').change(function(){
      var num = $(this).val();
      
    //------------------------------------------------------------------------------bug4 一定要判断用户输入的是字符串还是数组
      if(parseFloat(num).toString() != 'NaN'){ // isNaN
        // 复制上面 计算价格的代码
        var price = $(this).parent().parent().siblings('.p-price').text();
        price = price.substr(1);
        var perSum = parseFloat(price) * num;
        var perSumStr = '￥' + perSum.toFixed(2); // 3 --- '￥' + 3
        $(this).parent().parent().siblings('.p-sum').text(perSumStr);
      }
    
      getSum()
  })

  // 第六步  ---- 3min
  function getSum(){
    var num = 0;
    var money = 0;
    $('.itxt').each(function(index, item){
      // num += parseInt(item.val());  ----------------------------------------bug5    DOM对象上没有 val方法
      num += parseInt(item.value); // $(item).val()
    })
    $('.amount-sum em').text(num)

    $('.p-sum').each(function(index, item){
      // money += parseInt(item.value.substr(1)).toFixed(2); // ------------------------- BUG 6 普通元素没有value
      // money += parseInt(item.text.substr(1));
       money += parseInt($(item).text().substr(1));
    })
    $('.price-sum em').text('￥' + money.toFixed(2));
  }

  // 第7步,  几个删除按钮的处理  --- 5 min
  $('.p-action a').click(function(){
    $(this).parents('.cart-item').remove();
    getSum()
  })

  // 删除选中
  $(".remove-batch").click(function(){
    $(".j-checkbox:checked").parents(".cart-item").remove();
    getSum()
  })

  $('.clear-all').click(function(){
    $('.cart-item').remove();
    getSum()
  })

})