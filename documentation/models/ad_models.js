
var AdBase = Backbone.Model.extend({
	inCart:function(){
		var me=this;
		return ( typeof Shopping_Cart.get(me.get('adID')) !== 'undefined');
	},
    getDefaultDeliveryMethodName:function(){
        omniEvents.trigger("Log","Getting default method ID");
        return "PAC"
    },
    getDefaultDeliveryMethodID:function(){
        omniEvents.trigger("Log","Getting default method ID");
        return "1"
    },
    defaults: function() {
        var me= this;
        return {
            itemQT:1,
            adID:'',
            permalink:'',
            adTitle:'',
            adBaitText:'',
            adContentText:'',
            itemPriceLabel:'',
            total_in_stock:0,
            itemSubTotal:'',
            deliveryMethodName:me.getDefaultDeliveryMethodName(),
            deliveryMethodID:me.getDefaultDeliveryMethodID(),
            showShippingCalculator:false,
            defaultImage:'https://lh3.googleusercontent.com/ig46kbAM6OftExddR8jakoRCLzkaYf1ZdOB8397SvP0fLEG9jHm2FZxO25CSbNA38HydGhfXho5kRk9zfi4'
        }
    }
})

var AdModel = AdBase.extend({
	idAttribute:'adID',
})


var AdDetailModel = AdBase.extend({
    urlRoot:'/catalog/item/detail/',
    idAttribute:'adID',
})


var AdCartModel = AdBase.extend({
    collection:Shopping_Cart,
	urlRoot:'/shopping/',
})