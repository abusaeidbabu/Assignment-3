/*function signature/sample */
function  analyzeText(str) {
  if(typeof str==="string"){
    let newstr=str.split(" ").join("");
    let strobject=str.split(" ");
    bigWord=strobject[0];
    for(let word of strobject){
       if(word.length>bigWord.length){
        bigWord=word;
       }
    }
    if(newstr.length===0){
        return "Invalid"
    }
    return { longwords:bigWord , token: newstr.length};
  }
  else{
    return "Invalid";
  }
}
const output= analyzeText("A quick brown fox");
console.log(output);
console.log(typeof output);
