function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'mx';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32, country="MX"){
    console.log(name, age, country);
}

newFunction2();

newFunction2('luis', 31, 'Mexico');