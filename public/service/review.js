$(function () {
    $("#submit").click(function () {
      var formData = $("#review").serialize();
      

      $.ajax({
        type: "POST",
        url: "/review/",
        data: formData,
        async: false,
        success: function (data) {
          alert(data.log);
        },
      });
    });
  });
  
