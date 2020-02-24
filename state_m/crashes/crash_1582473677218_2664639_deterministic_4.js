function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337];
const v6 = [v5,1337,v3];
const v7 = {toString:v6,valueOf:parseFloat};
const v8 = {valueOf:v7,a:v5,toString:parseFloat,d:1337};
let v9 = "boolean";
for (const v11 in "replace") {
    const v14 = [1337,1337,1337,1337,1337];
    function v15(v16,v17,v18,v19) {
        'use strict'
        try {
            v19[3] = v19;
        } catch(v20) {
            const v28 = [1.7976931348623157e+308];
            const v30 = [255,255,13.37];
            const v31 = {a:255,toString:isFinite,c:v28,toString:v30,valueOf:"object",constructor:"gM8oAednYn"};
            const v34 = [13.37];
            const v36 = new Array(v34);
            const v37 = v36.keys();
            let v38 = RegExp;
            let v39 = v38;
            const v41 = new Promise(v39);
            const v42 = {toString:v28,valueOf:v31,d:255,constructor:536870912};
            const v43 = RegExp.apply(v42);
        }
        return v14;
    }
    const v44 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
    const v46 = new Proxy(v14,v44);
    v46[1] = "MIN_VALUE";
}
const v47 = {set:parseFloat,get:parseFloat};
}
%NeverOptimizeFunction(main);
main();
