$(function () {
  $(".main_conent").click(function () {
    $("#modal").fadeIn("slow");
  });

  $("#close").click(function () {
    $("#modal").fadeOut("slow");
  });
  
  $("#login").click(async function () {
    //login 전환
    document.getElementById('signForm').style.display='none';
    $("#loginForm").fadeIn("slow");
  });

  $("#signin").click(async function () {
    //signin 전환
    document.getElementById('loginForm').style.display='none';
    $("#signForm").fadeIn("slow");
  });



  $("#signinSubmit").click(async function () {
    //  회원가입 제출
    var formData = $("#signForm").serialize();

    $.ajax({
      type: "POST",
      url: "/signin",
      data: formData,
      async: false,
      success: function (data) {
        alert(data.log)
      },
    });

  });

  $("#loginSubmit").click(async function () {
    //로그인 제출
    var formData = $("#loginForm").serialize();
    
    $.ajax({
      type: "POST",
      url: "/login",
      data: formData,
      async: false,
      success: function (data) {
        if(data.log)
          alert(data.log)
      },
    });
  });

});
