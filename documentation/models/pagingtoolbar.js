var PagingToolBarModel = Backbone.Model.extend({
    defaults:{
        limit:10,
        offset_previous:0,
        offset_next:0,
        total:0,
        hasNext:false,
        hasPrevious:false,
        query:'',
        category:''
    }
});
var pagingToolBarModel = new PagingToolBarModel();