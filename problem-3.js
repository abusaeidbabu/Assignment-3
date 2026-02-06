/*function signature/sample */
function finalScore (omr) {
    if(typeof omr ==="object"){
    let totalmcq=omr.right+omr.wrong+omr.skip;
   if(totalmcq===100){
    const totalscore=omr.right-(omr.wrong*0.5);
    return Math.round(totalscore);
   }
   else{
    return "Invalid"
   }}
   else{
    return "Invalid";
   }
}
const output= finalScore({  right: 80, wrong: 25, skip: 0 });
console.log(output);
