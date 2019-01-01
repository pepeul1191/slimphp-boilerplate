var competitionRouter = Backbone.Router.extend({
  signInView: null,
  initialize: function() {

  },
  routes: {
    "": "default",
    "info": "info",
    "sign_in": "signIn",
    "upload": "upload",
    "*actions" : "default",
  },
  index: function(){
    //window.location.href = BASE_URL + "accesos/#/modulo";
  },
  default: function() {
    //window.location.href = BASE_URL + "error/access/404";
  },
  info: function(){
    var url = STATIC_URL + 'competition/docs/BASES_FOTO_COA.pdf';
    console.log(url);
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function (event) {
      var blob = req.response;
      var link=document.createElement('a');
      link.href=window.URL.createObjectURL(blob);
      link.download="BASES FOTOS COA.pdf";
      link.click();
    };
    req.send();
    window.location.href = BASE_URL + "competition/#/";
  },
  signIn: function(){

  },
  upload: function(){
    
  },
});

$(document).ready(function(){
  router = new competitionRouter();
  Backbone.history.start();
});
