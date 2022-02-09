

$( function(){
    $('.main_conent').click(function(){
        $('#modal').fadeIn('slow');
    });
    
    $('#close').click(function(){$('#modal').fadeOut('slow');});
    $('#submit').click(async function(){ 
        //login버튼 눌렸을 때
        let user={}
        const inputData ={
            id: $('#id').val(),
            password:$('#password').val()
        }
        
        $.ajax({
            type:'POST',
            url:'/login',
            data:inputData,
            async:false,
            success:function (data) {
            }})

    })


    




})