function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [v6];
const v8 = {b:v7};
const v9 = {constructor:Symbol,c:65535,valueOf:"lkFM89Vjd.",a:65535,d:v6,b:1337};
let v10 = 13.37;
const v14 = [13.37,13.37,13.37,13.37,13.37];
const v16 = [v14,1337,13.37];
const v18 = 1337 > eval;
const v20 = {__proto__:536870912};
const v22 = Symbol.species;
let v25 = 0;
do {
    const v27 = Symbol.isConcatSpreadable;
    function v28(v29,...v30) {
    }
    const v31 = v25 + 1;
    v25 = v31;
} while (v25 < 5);
for (const v33 in "object") {
    const v36 = [1337,1337,1337,1337,1337];
    function v37(v38,v39,v40,v41) {
        'use strict'
        try {
            v41[3] = v41;
        } catch(v42) {
            const v47 = [1337,1337,1337];
            const v48 = [3664180981,3664180981,"string","string"];
            const v49 = {valueOf:v48,length:v47,toString:parseFloat,constructor:"string",c:parseFloat};
            function v50(v51,v52) {
                return v40;
            }
            const v53 = v47.__proto__;
            const v57 = [v37];
            const v59 = [255,255,255];
            const v60 = {a:255,toString:arguments,c:v57,__proto__:v59,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v36;
    }
    const v61 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
    const v63 = new Proxy(v36,v61);
    v63[1] = "MIN_VALUE";
}
const v64 = typeof 1000;
const v66 = v64 === "number";
}
%NeverOptimizeFunction(main);
main();
