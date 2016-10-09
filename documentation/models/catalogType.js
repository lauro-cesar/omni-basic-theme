var CatalogType = Backbone.Model.extend({
    defaults:function(){
        var me=this;
        return {
            catalogID:'',
            catalogName:'',
            catalogDescription:'',
            catalogType:'',
            catalogBackground:'',
            order:'',
            totalItems:'',
            id:''
        }
    }
});