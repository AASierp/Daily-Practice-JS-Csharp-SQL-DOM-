// find the first non-repeating character in a string

let str = "there are many magic rings in the world bilbo baggins..."

function nonRepeat(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]] === undefined){
            obj[str[i]] = 1;
        }
        else{
            obj[str[i]]++
        }
    }

    for(let i = 0; i < str.length; i++){
        if(obj[str[i]] === 1){
            return i;
        }
            
    }

    return -1;
}

console.log(nonRepeat(str));
console.log(str[13]);
