$(function () {
    $("#submit").click(function () {
      var formData = $("#review").serialize();
      var score = document.getElementById('score').value
      formData.score= score;

      alert(formData)
      
      
      $.ajax({
        type: "POST",
        url: "/review/",
        data: {formData,score},
        async: false,
        success: function (data) {
          alert(data.log);
        },
      });
    });
  });
  

// function changeIsApproved(reserveObj) {
//     var reservationId = document.getElementById("reservationId").value;
//     const isApproved = reserveObj;
  
//     var updateData = { isApproved, reservationId };
  
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = () => {
//       if (httpRequest.readyState === XMLHttpRequest.DONE) {
//         if (httpRequest.status === 200) {
//           var result = httpRequest.response;
//           alert(result.log);
//         } else {
//           alert("Request Error!");
//         }
//       }
//     };
  
//     httpRequest.open("POST", "/schedule/approve/");
//     httpRequest.responseType = "json";
//     httpRequest.setRequestHeader("Content-Type", "application/json");
//     httpRequest.send(JSON.stringify(updateData));
//   }
  