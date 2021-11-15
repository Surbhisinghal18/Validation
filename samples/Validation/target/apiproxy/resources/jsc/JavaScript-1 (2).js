//  var fs = require('fs');
// var con = fs.readFileSync('inp.json');
// var req=JSON.parse(con);
// console.log(req);
var req=JSON.parse(context.getVariable('request.content'));
var email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
var bcode=/[a-zA-Z0-9]{6}$/;
var scode=/^[a-zA-Z]{3}$/;
var bacc=/^[a-zA-z0-9]{30}$/;
var errorRes = {
    "message":"Invalid schema"
}
// var req=JSON.parse(context.getVariable('error.content'));
latest={};

if('Email' in req){
    if(email.test(request.Email)){
          if(context.getVariable('trigger_contentType') === true){
            //   context.setVariable("trigger",true)
              context.setVariable('request.content',JSON.stringify(latest))
         }}
// else {
//         context.setVariable('request.content',JSON.stringify(errorRes))
//           }
    }
    // }        
               
// if('Email' in req ){
//      context.setVariable("trigger",true)
//      latest.mail=req.Email;
//     if(!(email.test(request.Email)))
//       context.setVariable('error.content',JSON.stringify(errorRes))
//       }

// else{
//         context.setVariable('error.content',JSON.stringify(errorRes))
//       }

// else{
//     latest.mail=req.Email;
//   }
if('Phone' in req){
    context.setVariable("trigger",true)
    latest.phonenum=req.Phone;
      }
   
if('B_Code' in req){
    latest.BankCode=req.B_Code;
}
if('S_Code' in req){                                                            
    latest.SortCode=req.S_Code;
}
if('B_Acc' in req){
    latest.BankAcc=req.B_Acc;
}
if('id' in req){
    latest.ID=req.id;
}
if('entity' in req){
    latest.Entity=req.entity;
}
if('amount' in  req){
    latest.Amount=req.amount;
}
if('currency' in req){
    latest.Currency=req.currency;
}
if('base_amount' in req){
    latest.BAmountt=req.base_amount;
}
if('status' in req){
    latest.Status=req.status;
}
if('order_id' in req){
    latest.oid=req.order_id;
}
if('invoice_id' in req){
    latest.InvoiceID=req.invoice_id;
}
if('international' in req){
    latest.Inter=req.international;
}
if('method' in req){
    latest.Method=req.method;
}
if('amount_refunded' in req){
    latest.Am_Refund=req.amount_refunded;
}
if('amount_transferred' in req){
    latest.Am_Transfer=req.amount_transferred;
}
if('refund_status' in req){
    latest.Ref_Status=req.refund_status;
}
if('captured' in req){
    latest.Captured=req.captured;
}
if('description' in req){
    latest.Description=req.description;
}
if('card_id' in req){
    latest.Card_ID =req.card_id;
}
if('bank' in req){
    latest.Bank=req.bank;
}
if('wallet' in req){
    latest.Wallet=req.wallet;
}

// var request = JSON.parse(context.getVariable('request.content'));

if(Array.isArray(req.Education)){
    var newresponse = [];
    newresponse[0] = {};
    var id = req.Education.length;
    if(id > 0){
        for (var i = 0; i < id; i++){
            var a = {
                "Education": req.Education[i].EducationLevel,
                "School": req.Education[i].HighSchool,
                "Typ": req.Education[i].Type,
                "Col": req.Education[i].College,
            };
            newresponse[i] = {};
            newresponse[i]["Education"] = a;
    }
}}
//console.log(newresponse);
var z={
  "Education": a,
  "Latest": latest
};
if(context.getVariable("trigger")){
    context.setVariable('response.content',JSON.stringify(errorRes))
    context.setVariable('error.status.code',400)
}
else{
context.setVariable('request.content', JSON.stringify(z));
}

// context.setVariable('request.content', JSON.stringify(validation(req)));
// context.setVariable('request.content', JSON.stringify(newresponse));
// context.setVariable('request.content', JSON.stringify(latest));


   
// console.log("-----------------------------------") 
// console.log(latest);




