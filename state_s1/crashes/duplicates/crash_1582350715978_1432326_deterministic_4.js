function main() {
const v2 = [13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = [1337,-256];
const v6 = {d:1337,b:-256,a:13.37,e:1337};
const v7 = {constructor:-256,toString:v2,__proto__:13.37,b:-256,valueOf:13.37};
let v8 = 13.37;
let v12 = 0;
const v13 = 1337 != Number;
let v14 = 13.37;
const v15 = v12 + 1;
const v16 = Number.__proto__;
const v18 = Symbol.replace;
const v19 = !13.37;
const v20 = [1337];
const v23 = 1337 > eval;
let v25 = 0;
const v27 = Symbol.isConcatSpreadable;
const v28 = v25 + 1;
for (const v30 in "object") {
    const v33 = [1337,1337,1337,1337,1337];
    function v34(v35,v36,v37,v38) {
        'use strict'
        try {
            v38[3] = v38;
        } catch(v39) {
            const v44 = [1337,1337,1337];
            const v45 = [3664180981,3664180981,"string","string"];
            const v46 = {valueOf:v45,length:v44,toString:parseFloat,constructor:"string",c:parseFloat};
            const v47 = v44.__proto__;
            const v51 = [v34];
            const v53 = [255,255,255];
            let v55 = 0;
            const v56 = {a:255,toString:arguments,c:v51,__proto__:v53,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v33;
    }
    const v57 = {deleteProperty:v34,set:v34,getPrototypeOf:v34,call:v34,preventExtensions:v34,isExtensible:v34,construct:v34,get:v34,ownKeys:v34,setPrototypeOf:v34,has:v34};
    const v59 = new Proxy(v33,v57);
    v59[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
