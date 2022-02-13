$(function () {
  $("#mimoge").click(function () {
    $("#modal").fadeIn("slow");
  });

  $("#close").click(function () {
    $("#modal").fadeOut("slow");
  });

  $("#comment_submit").click(function () {
    var comment = document.getElementById("comment_area").value;

    if (comment == "") {
      alert("코멘트란을 채워주세요.");
    } else {
      var formData = $("#commentForm").serialize();
      $.ajax({
        type: "POST",
        url: "/enroll",
        data: formData,
        async: true,
        success: function (data) {
          alert(data.log);
        },
      });
    }
  });
});
