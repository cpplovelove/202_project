

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
            type:'GET',
            url:'/user/'+inputData.id,
            data:{},
            async:false,
            success:function (data) {
                const userData= data[0];
                user ={
                    id:userData.userId,
                    password:userData.userPass
                }            
                if(user.id==inputData.id&&user.password==inputData.password){
                    $.get('home')
                }
                
            }})



    })


    




})