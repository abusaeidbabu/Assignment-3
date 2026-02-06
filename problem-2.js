/*function signature/sample */
function validOtp(otp) {
     if(typeof otp ==="string"){
        if(otp.startsWith("ph-")){
            if(otp.length===8){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
     }
     else{
        return "Invalid";
     }
}
 const output =validOtp(12345678);
 console.log(output);
