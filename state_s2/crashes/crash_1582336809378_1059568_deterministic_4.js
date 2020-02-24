function main() {
const v3 = [13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {a:"boolean",valueOf:1337};
const v8 = {d:"boolean",e:String,a:String,constructor:1337,length:v5};
let v9 = 1337;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [v12,1337,13.37];
const v16 = 1337 > eval;
const v18 = {__proto__:536870912};
const v20 = Symbol.species;
let v22 = 0;
for (const v24 in "undefined") {
    const v26 = new Uint32Array();
}
let v28 = 0;
const v29 = v28 + 1;
for (const v31 in "object") {
    const v34 = [1337,1337,1337,1337,1337];
    function v35(v36,v37,v38,v39) {
        'use strict'
        try {
            v39[3] = v39;
        } catch(v40) {
            const v46 = [1337,1337,1337];
            const v47 = [3664180981,3664180981,"string","string"];
            const v50 = Math.hypot(-1970853828,13.37,"boolean");
            const v54 = [v35];
            const v56 = [255,255,255];
            const v57 = {a:255,toString:arguments,c:v54,__proto__:v56,valueOf:DataView,constructor:"gM8oAednYn"};
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
