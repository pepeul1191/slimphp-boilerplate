var PhotoView = Backbone.View.extend({
  el: '#workspace',
  photos: null,
  initialize: function(){
    this.table = new TableView(tablePhotoData);
    this.modalButton = $("#btnModal");
		this.modalContainer = $("#modal-container");
  },
  events: {
    "click #tablePhoto > tbody > tr > td > i.photo": "photo",
  },
  photo: function(event){
    var photoId = event.target.parentElement.parentElement.firstChild.innerHTML;
    var rs = this.table.collection.where({photo_id: photoId});
    var model = rs[0];
    var template = _.template(`
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="exampleModalLabel">Descripción de la Foto</h4>
						<button type="button" class="close" data-dimdiss="modal" aria-label="Close" id="closeModal">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
            <br>
						<img src="<%= UPLOAD + model.get('file_name') %>">
            <br><br>
            <h1><%= model.get('title') %></h1>
            <p><%= model.get('description') %></p>
					</div>
				</div>
			</div>
		`);
		this.modalContainer.html(template({model: model}));
		this.modalButton.click();
  },
  //eventos table de permisos
  render: function(event){
    $(this.el).html(photoTemplate({photos: this.photos}));
  },
});
