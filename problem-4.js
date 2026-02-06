/*function signature/sample */
function gonoVote(array) {
 if(Array.isArray(array)===true){
    let i=0;
    let j=0;
    for(let item of array){
        if(item==="ha"){
            i++;
        }
        else{
            j++;
        }
    }
    if(i===j){
        return "equal";
    }
    else if(i>j){
        return true;
    }
    else{
        return false;
    }
 }
 else{
    return "Invalid";
 }
}
const array=12345;
const output= gonoVote(array);
console.log(output);