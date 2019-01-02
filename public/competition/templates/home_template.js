var homeTemplate = _.template(`
  <img src="<%= STATIC_URL %>competition/assets/img/tree.png" alt="" class="mx-auto d-block">
  <div class="col-md-12 text-md-center links">
    <a href="<%= BASE_URL %>competition/#/info" class="link">BASES</a>
    <a href="<%= BASE_URL %>competition/#/sign_in" class="link">INSCRIPCIÓN</a>
  </div>
`);
