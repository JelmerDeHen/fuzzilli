function main() {
const v2 = [13.37,13.37,13.37];
const v4 = [1337];
const v5 = [Function,v2];
const v6 = {};
const v7 = {};
let v8 = v6;
const v10 = [1337,1337,1337,1337];
const v11 = {valueOf:v10};
const v13 = {e:v11,d:"d"};
const v15 = [1337];
let v17 = undefined;
let v19 = -128;
const v20 = v19 + 1;
const v23 = 1337 > eval;
let v25 = 0;
const v26 = v25 + 1;
for (const v28 in "object") {
    function v30(v31,v32,v33,v34) {
        'use strict'
    }
    const v36 = [1337,1337,1337,1337,1337];
    function v37(v38,v39,v40,v41) {
        'use strict'
        try {
            v41[3] = v41;
        } catch(v42) {
            const v47 = [1337,1337,1337];
            const v48 = [3664180981,3664180981,"string","string"];
            const v49 = {valueOf:v48,length:v47,toString:parseFloat,constructor:"string",c:parseFloat};
            const v50 = v47.__proto__;
            const v54 = [v37];
            const v56 = [255,255,255];
            let v58 = 0;
            const v59 = {a:255,toString:arguments,c:v54,__proto__:v56,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v36;
    }
    const v60 = {deleteProperty:v37,set:v37,getPrototypeOf:v37,call:v37,preventExtensions:v37,isExtensible:v37,construct:v37,get:v37,ownKeys:v37,setPrototypeOf:v37,has:v37};
    const v62 = new Proxy(v36,v60);
    v62[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
