// In Challenge 3, this time make sure that at least one element from both sets of radio buttons is selected.

$("form").submit(function(onsubmit){


    var fruit = $('input[name="fruit"]:checked');
    var standing = $('input[name="standing"]:checked');
    console.log(fruit.val());
    console.log(standing.val());

    if ((fruit.is(":checked")) && (standing.is(":checked"))){
        return true;
    }

    if((fruit.is(":checked"))){
        console.log(fruit.val());
        alert("You must pick a standing!");
    }

    if((standing.is(":checked"))){
        console.log(standing.val());
        alert("You must pick a fruit!");
    }

    if((!$(fruit).is(':checked')) && (!$(standing).is(':checked'))){
        console.log(fruit.val());
        console.log(standing.val());
        alert("You must pick a fruit and a standing");
    }

    return false;

})
