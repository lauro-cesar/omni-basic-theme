var UserAccountModel = Backbone.Model.extend({
    url:'/accounts/',
    defaults: function() {
        var me=this;
        return {
            connected:false,
            sessionID:null,
            userName:'Anonymous',
            userAvatar:'/img/user.png',
            userLogoutUrl:'/disconnect/',
            status:'done',
            loaded:false
        }
    },
    updateView:_.debounce(function(){
        var me=this;
        if (me.get('connected')){
            $('.showIfDisconnected').each(function(index,ele){
                $(this).fadeOut();
            })

            $('.showIfConnected').each(function(index,ele){
                $(this).fadeIn();
            })

        } else {

            $('.showIfDisconnected').each(function(index,ele){
                $(this).fadeIn();
            })
           $('.showIfConnected').each(function(index,ele){
                $(this).fadeOut();
            })

        }
    },200),
  });

var userAccount = new UserAccountModel()