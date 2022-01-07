function revString(str) {
    var splitString = str.split("");
    var revArray = splitString.reverse();
    var joinArray = revArray.join("");
    return joinArray;
}
console.log(revString("1234"));

let num = Number(revString);
