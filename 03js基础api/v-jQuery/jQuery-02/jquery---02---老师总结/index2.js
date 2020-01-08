$(function(){
  // $('quanxuan').change(function())

  $('.checkall').change(function(){
    // console.log($('.checkall').prop('checked'))
    // $('.j-checkbox').prop('checked', false)
    
    //-------------------------------------------------------------------------------------------bug 1
    // $('.j-checkbox, .checkall').prop('checked', $('.checkall').prop('checked'))

    $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'))
  })

  $('.j-checkbox').change(function(){
    if($('.j-checkbox:checked').length == $('.j-checkbox').length){
      //-------------------------------------------------------------------------------------------bug 2
      // $('.checkall').prop('checked', $(this).prop('checked'))
      $('.checkall').prop('checked', true)
    }else {
      $('.checkall').prop('checked', false)
    }
  })
})