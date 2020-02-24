function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337];
const v7 = [v4,1337,304427810,1337];
const v8 = {d:"number",constructor:304427810,a:v6,e:1337};
const v9 = {};
let v10 = Math;
const v15 = [13.37,13.37,13.37,13.37,13.37];
const v17 = [v15,1337,13.37];
const v20 = {set:Array};
const v22 = Object.defineProperty(v15,"valueOf",v20);
for (const v23 in "boolean") {
    const v25 = Symbol.unscopables;
}
const v26 = 1337 > eval;
let v28 = 0;
const v30 = Symbol.isConcatSpreadable;
const v31 = v28 + 1;
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
                return v39;
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
}
%NeverOptimizeFunction(main);
main();
