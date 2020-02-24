function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [];
const v7 = {length:"object",b:v3,__proto__:v3};
const v8 = {c:"object",toString:v3,__proto__:v5,valueOf:eval};
let v9 = 13.37;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [v12,1337,13.37];
const v16 = 1337 > eval;
const v18 = {__proto__:536870912};
const v20 = Symbol.species;
let v22 = 0;
let v24 = 0;
const v25 = v24 + 1;
for (const v27 in "object") {
    const v30 = [13.37,13.37,2147483649,13.37,13.37];
    function v31(v32,v33,v34,v35) {
        'use strict'
    }
    const v36 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:v31,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v30};
    const v39 = [1337,1337,1337,1337,1337];
    function v40(v41,v42,v43,v44) {
        'use strict'
        try {
            v44[3] = v44;
        } catch(v45) {
            const v50 = [1337,1337,1337];
            const v51 = [3664180981,3664180981,"string","string"];
            const v52 = {valueOf:v51,length:v50,toString:parseFloat,constructor:"string",c:parseFloat};
            function v53(v54,v55) {
                return v43;
            }
            const v56 = v50.__proto__;
            const v60 = [v40];
            const v62 = [255,255,255];
            const v63 = {a:255,toString:arguments,c:v60,__proto__:v62,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v39;
    }
    const v64 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
    const v66 = new Proxy(v39,v64);
    v66[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
