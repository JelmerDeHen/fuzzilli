function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337];
const v6 = [1337,"symbol",13.37,4294967295];
const v7 = {toString:"symbol"};
const v8 = {};
let v9 = v7;
const v13 = [13.37,13.37,13.37];
const v15 = v6.forEach(Number);
const v16 = [1337,1337,1337,1337];
const v17 = [v16,1337];
const v18 = {e:Number,d:798072795,toString:v13};
const v19 = {e:1337};
let v20 = v13;
const v23 = [13.37];
for (const v25 in "object") {
    const v28 = [1337,1337,1337,1337,1337];
    function v29(v30,v31,v32,v33) {
        'use strict'
        try {
            v33[3] = v33;
            const v34 = 6 * v30;
            const v36 = {get:Number};
            const v38 = Object.defineProperty(v23,"__proto__",v36);
        } catch(v39) {
            const v44 = [1337,1337,1337];
            const v45 = [3664180981,3664180981,"string","string"];
            const v46 = {valueOf:v45,length:v44,toString:parseFloat,constructor:"string",c:parseFloat};
            const v47 = v44.__proto__;
            const v51 = [v29];
            const v53 = [255,255,255];
            const v54 = {a:255,toString:arguments,c:v51,__proto__:v53,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v28;
    }
    const v55 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:v29,has:v29};
    const v57 = new Proxy(v28,v55);
    v57[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
