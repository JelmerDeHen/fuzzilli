function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = [v2];
const v6 = {__proto__:"PI",valueOf:1337,a:v2,toString:v4};
const v7 = {};
let v8 = v2;
const v10 = new Uint32Array();
const v11 = v10.slice();
const v14 = [13.37,13.37,13.37,13.37,13.37];
const v16 = [v14,1337,13.37];
const v18 = 1337 > eval;
let v20 = 0;
let v22 = 0;
let v24 = 0;
const v25 = v24 + 1;
const v26 = v22 + 1;
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
