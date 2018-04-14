var obj1 = {
    name: "Helen",
    surname: "Strypko"
};

function validate(obj1){
    if(obj1.name && obj1.surname){
        return true;
    }else{
        return false;
    }
}

console.log(validate(obj1));

function validate2(obj1){
    if(obj1.name && obj1.surname && obj1.age){
        return true;
    }else{
        console.error("error :'age' wasn't passed on object");
    }
}

validate2(obj1);




