function string_length(value:string):number{
    return value.length;
    console.log("The length of string with spaces is: " + string_length("test 1"));
}
function string_length1(value:string):number{
    return value.replace(" ", "").length;
    console.log("The length of string with no spaces is: " + string_length1("test 1"));
}

function both_functions(value:string, spaces?:boolean):number{
    if(spaces){
        value.length;
    }
    else{
        value.replace("", " ").length;
    }
    console.log("The length of string is: " + both_methods("test 1", true));
}