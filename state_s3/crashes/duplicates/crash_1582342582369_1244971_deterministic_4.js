function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [v5,v5];
const v7 = {e:Int8Array,toString:v6,length:v6,valueOf:Int8Array};
const v8 = {b:v6,e:5};
let v9 = v3;
const v12 = 1024 * 13.37;
const v15 = [13.37,13.37,13.37,13.37,13.37];
const v17 = [v15,1337,13.37];
let v19 = 0;
const v21 = 1337 > eval;
for (const v23 in "symbol") {
}
let v25 = 0;
const v26 = v25 + 1;
let v28 = 0;
const v29 = v28 + 1;
for (const v31 in "object") {
    const v34 = [1337,1337,1337,1337,1337];
    function v35(v36,v37,v38,v39) {
        'use strict'
        try {
            v39[3] = v39;
        } catch(v40) {
            const v45 = [1337,1337,1337];
            const v46 = [3664180981,3664180981,"string","string"];
            const v47 = {valueOf:v46,length:v45,toString:parseFloat,constructor:"string",c:parseFloat};
            const v48 = v45.__proto__;
            const v52 = [v35];
            const v54 = [255,255,255];
            let v56 = 0;
            const v57 = {a:255,toString:arguments,c:v52,__proto__:v54,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v34;
    }
    const v58 = {deleteProperty:v35,set:v35,getPrototypeOf:v35,call:v35,preventExtensions:v35,isExtensible:v35,construct:v35,get:v35,ownKeys:v35,setPrototypeOf:v35,has:v35};
    const v60 = new Proxy(v34,v58);
    v60[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
