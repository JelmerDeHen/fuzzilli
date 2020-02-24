function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = ["MAX_VALUE",v5,isNaN,1337];
const v7 = {__proto__:13.37,valueOf:v6,d:"MAX_VALUE",c:v3,a:13.37,b:v5};
const v8 = {e:isNaN,b:1337,valueOf:1337,d:1337,c:"MAX_VALUE",a:v5};
let v9 = v8;
let v11 = 0;
let v13 = 0;
const v14 = [];
const v16 = new Int16Array();
const v17 = v14.__proto__;
const v18 = v11 + 1;
const v20 = [1337,1337,1337,1337];
const v22 = [13.37,13.37,13.37,13.37];
const v24 = [v22,13.37,13.37];
const v27 = 1337 > eval;
let v29 = 0;
const v30 = v29 + 1;
for (const v32 in "object") {
    const v35 = [1337,1337,1337,1337,1337];
    function v36(v37,v38,v39,v40) {
        'use strict'
        try {
            v40[3] = v40;
        } catch(v41) {
            const v46 = [1337,1337,1337];
            const v47 = [3664180981,3664180981,"string","string"];
            const v48 = {valueOf:v47,length:v46,toString:parseFloat,constructor:"string",c:parseFloat};
            const v49 = v46.__proto__;
            const v53 = [v36];
            const v55 = [255,255,255];
            let v57 = 0;
            const v58 = {a:255,toString:arguments,c:v53,__proto__:v55,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v35;
    }
    const v59 = {deleteProperty:v36,set:v36,getPrototypeOf:v36,call:v36,preventExtensions:v36,isExtensible:v36,construct:v36,get:v36,ownKeys:v36,setPrototypeOf:v36,has:v36};
    const v61 = new Proxy(v35,v59);
    v61[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
