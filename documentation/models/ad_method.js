var AdMethod = Backbone.Model.extend({
    defaults:function(){
        var me=this;
        return {
            label:'',
            description:'',
            id:'',
            icon:'',
            logo:'',
            checked:false
        }
    }

});