$('form').submit(function( event ){

    var validInput = true;

    var address = $('#streetaddr').val()

    var name=$('#fullname').val()

    console.log("Here");
    console.log(name);
    console.log(address)
    

if (name.length === 0){
    console.log(name.length)
        $('#nameerrormsg').css('display', 'block');
         validInput = false;
         event.preventDefault();
    }

else {
 $('#nameerrormsg').css('display', 'none');
   }
    if (address.length===0){
        console.log(address.length)
        event.preventDefault();
         $('#addrerrormsg').css('display', 'block');
         validInput = false;
     }
    else {
        $('#addrerrormsg').css('display', 'none');
    }
   return validInput;
 });

