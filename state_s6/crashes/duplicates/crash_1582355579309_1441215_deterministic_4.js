function main() {
const v3 = [13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [v5,v5,"function",1337];
const v7 = {constructor:v5,b:v5,c:v6,a:"function"};
const v8 = {b:1337,constructor:-4294967297,c:v7,d:v7};
let v9 = -4294967297;
const v12 = [13.37,13.37,13.37,13.37,13.37];
const v14 = [v12,1337,13.37];
const v16 = 1337 > eval;
const v18 = {__proto__:536870912};
const v20 = Symbol.species;
let v22 = 0;
let v24 = 0;
const v25 = v24 + 1;
for (const v27 in "object") {
    const v32 = [13.37,13.37,-4294967296];
    function v33(v34,v35,v36,v37) {
        'use strict'
    }
    const v38 = {deleteProperty:v33,set:v33,getPrototypeOf:v33,call:v33,preventExtensions:v33,isExtensible:v33,construct:v33,get:v32,__proto__:v33,setPrototypeOf:v33,has:v33};
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
                return v53;
            }
            const v59 = [v40];
            const v61 = [255,255,255];
            let v63 = 0;
            const v64 = {a:255,toString:arguments,c:v59,__proto__:v61,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v39;
    }
    const v65 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
    const v67 = new Proxy(v39,v65);
    v67[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
