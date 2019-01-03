var BranchView = Backbone.View.extend({
	el: '#workspace',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.events = this.events || {};
		this.table = new TableView(tableBranchData);
	},
	events: {
		// se está usando asignacion dinamica de eventos en el constructor
		"click #tableBranch > tfoot > tr > td > button.agregar-fila": "agregarFila",
		"click #tableBranch > tfoot > tr > td > button.guardar-tabla": "guardarTabla",
		"keyup #tableBranch > tbody > tr > td > input.text": "inputTextEscribir",
		"change #tableBranch > tbody > tr > td > select": "cambiarSelect",
		"click #tableBranch > tbody > tr > td > i.quitar-fila": "quitarFila",
	},
	render: function() {
		$(this.el).html(branchTemplate({}));
	},
	mostrarTabla: function(){
		this.table.listar();
	},
	inputTextEscribir: function(event){
		this.table.inputTextEscribir(event);
	},
	quitarFila: function(event){
		this.table.quitarFila(event);
	},
	guardarTabla: function(event){
		this.table.guardarTabla(event);
	},
	agregarFila: function(event){
		this.table.agregarFila(event);
	},
	cambiarSelect: function(event){
		this.table.cambiarSelect(event);
	},
});
