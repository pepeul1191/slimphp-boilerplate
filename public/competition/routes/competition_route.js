var competitionRouter = Backbone.Router.extend({
  signInView: null,
  homeView: null,
  uploadView: null,
  initialize: function() {

  },
  routes: {
    "": "index",
    "info": "info",
    "sign_in": "signIn",
    "upload": "upload",
    "*actions" : "default",
  },
  index: function(){
    if(this.homeView == null){
      this.homeView = new HomeView();
    }
    this.homeView.render();
  },
  default: function() {
    //window.location.href = BASE_URL + "error/access/404";
  },
  info: function(){
    var url = STATIC_URL + 'competition/docs/BASES_FOTO_COA.pdf';
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
    if(this.signInView == null){
      this.signInView = new SignInView();
    }
    this.signInView.render();
  },
  upload: function(){
    if(this.uploadView == null){
      this.uploadView = new UploadView();
    }
    this.uploadView.render();
  },
});

$(document).ready(function(){
  router = new competitionRouter();
  Backbone.history.start();
});
