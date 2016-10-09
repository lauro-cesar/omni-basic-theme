var CustomerModel = ModelValidator.extend({
	urlRoot:'/shopping/customer/',
    required:['customerName','customerEmail'],
    minLength:3,
    defaults:{
    	customerName:'',
        customerEmail:'',
        customerPhone:'',
        customerPhonePrefix:'',
        isVerify:false,
        isSaved:false,
        isValid:false,
        showVerifyMessage:false,
        verificationCode:'-.-.-',
        customerTermsAccepted:false
    }
})