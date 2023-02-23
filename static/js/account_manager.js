export function accountDelete() {
  var dataJSON={};
  dataJSON.email = getLocalStorage("email");

  $.ajax({
    url: corsURL + HOST_URL_EID_DAEMON + "/accounts/delete",
    type: "POST",
    async: false,
    crossDomain: true,
    data:  dataJSON,
    success: function(returnData) {
      const obj = JSON.parse(returnData);
      dataJSON = obj
      window.location.replace("/index.html");
    },
    error: function(xhr, ajaxOptions, thrownError){
      console.log(thrownError);
    }
  })
}