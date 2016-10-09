var ContactModel = ModelValidator.extend({
	urlRoot:'/support/',
	required:['assunto','mensagem','customerEmail','customerName'],
	minLength:3,
    defaults:function(){
        return {
    	orderID:'',
    	customerName:'',
    	customerEmail:'',
        customerPhone:'',
        customerPhonePrefix:'',
        assunto:'',
        localizador:'',
        mensagem:''
    }
	}
})