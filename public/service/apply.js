$(function () {
  $("#submit").click(function () {
    var formData = $("#applyForm").serialize();
    $.ajax({
      type: "POST",
      url: "/schedule/",
      data: formData,
      async: false,
      success: function (data) {
        alert(data.log);
      },
    });
  });
});
