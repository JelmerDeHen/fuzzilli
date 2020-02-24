function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = [1337];
const v7 = {e:RegExp};
const v8 = {length:13.37,toString:-536870912};
let v9 = 13.37;
const v13 = [13.37,13.37,13.37,13.37,13.37];
const v15 = [v13,1337,13.37];
const v17 = 1337 > eval;
const v18 = {__proto__:v5};
const v19 = (1337).species;
let v21 = 0;
let v23 = 0;
let v26 = 0;
do {
    function v27(v28,v29,v30,v31) {
        'use strict'
    }
    const v32 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
    const v33 = v26 + 1;
    v26 = v33;
} while (v26 < 5);
for (const v35 in "object") {
    const v38 = [1337,1337,1337,1337,1337];
    function v39(v40,v41,v42,v43) {
        'use strict'
        try {
            v43[3] = v43;
        } catch(v44) {
            const v49 = [1337,1337,1337];
            const v50 = [3664180981,3664180981,"string","string"];
            const v51 = {valueOf:v50,length:v49,toString:parseFloat,constructor:"string",c:parseFloat};
            function v52(v53,v54) {
                return v52;
            }
            const v58 = [v39];
            const v60 = [255,255,255];
            let v62 = 0;
            const v63 = {a:255,toString:arguments,c:v58,__proto__:v60,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v38;
    }
    const v64 = {deleteProperty:v39,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
    const v66 = new Proxy(v38,v64);
    v66[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
