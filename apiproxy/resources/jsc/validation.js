var req=JSON.parse(context.getVariable('request.content'));
function validation(request){
    var email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    var bcode=/[a-zA-Z0-9]{6}$/;
    var scode=/^[a-zA-Z]{3}$/;
    var bacc=/^[a-zA-z0-9]{30}$/;
    latest={};
    var show = {message:"valid schema"}
    if('Email' in request && 'Phone' in request && 'B_Code' in request && "S_Code" in request && "B_Acc" in request ){
    //  latest.mail=request.Email;
    //  latest.BankAccount=request.B_Acc;
    //  latest.BankCode=request.B_Code;
    if(!(email.test(request.Email))){
    show.message = "invalid"
    show.email = "invalid email";
    }
     // else
    //     console.log(latest);
    //  latest.Mobile=request.Phone;
    if(!(phone.test(request.Phone))){
    show.message = "invalid"
    show.phone = "PhoneNo Schema is not valid"
    }
    // else
    //     console.log(latest);
    
    if(!(bcode.test(request.B_Code))){
    show.message = "invalid"
    show.bcode = "Bank_Code Schema is not valid"
    }
    if(!(scode.test(request.S_Code))){
    show.message = "invalid"
    show.scode = "SortCode Schema is not valid"
    // x=request.S_Code;
    // context.setVariable('request.content', JSON.stringify(x));
    // console.log(x);
    }
    if(!(bacc.test(request.B_Acc))){
    show.message = "invalid"
    show.bacc = "B_Acc Schema is not valid"
    }
    return show
    }
    return "invalid data"
    }
    // var Validation={
    //     "Email":req.Email
    // }
    context.setVariable("valid_data", JSON.stringify(validation(req)));
    // context.setVariable('request.content',JSON.stringify(latest))
    // if(context.getVariable("trigger") === true){
        
    // }
   
   