function main() {
const v4 = [13.37,13.37,13.37];
const v6 = [1337,1337];
const v7 = ["buffer",1337,arguments,-4139091491];
const v8 = {};
const v9 = {b:arguments,length:1337,valueOf:1337,e:v6,__proto__:arguments,a:arguments};
let v10 = v9;
const v13 = {ownKeys:Number,getOwnPropertyDescriptor:Number};
const v15 = new Proxy(WeakSet,v13);
const v16 = 13.37 - 1;
let v18 = 0;
const v19 = {};
const v20 = [v19];
const v21 = v18 + 1;
const v23 = [13.37,13.37,13.37,13.37];
const v26 = 1337 > eval;
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
            const v47 = {valueOf:v46,length:v39,toString:parseFloat,constructor:"string",c:parseFloat};
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
