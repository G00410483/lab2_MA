function string_length(value) {
    return value.length;
}
function string_length1(value) {
    return value.replace(" ", "").length;
}
console.log("The length of string is with spaces: " + string_length("test 1"));
console.log("The length of string is with no spaces: " + string_length1("test 1"));
