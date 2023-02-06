function isJavascriptFile(fileName){
    if(fileName.endsWith('.js')){
        return true;
    }else{
        return false;
    }
}
let result = isJavascriptFile("index.js");
console.log(result);