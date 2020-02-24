function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337,1337];
const v4 = [v3,v3,13.37];
const v5 = {d:v3,valueOf:v1,b:v4,length:1337};
const v6 = {};
let v7 = v6;
const v11 = [13.37,13.37,13.37,13.37,13.37];
const v12 = [v11,Array,13.37];
const v14 = 1337 > eval;
const v16 = [13.37,13.37,13.37,13.37,13.37];
let v17 = v16;
for (const v19 in "boolean") {
    const v21 = (1337).constructor;
    const v22 = {set:v21,a:v21};
}
let v24 = 0;
const v25 = v24 + 1;
for (const v27 in "object") {
    const v30 = [1337,1337,1337,1337,1337];
    function v31(v32,v33,v34,v35) {
        'use strict'
        try {
            v35[3] = v35;
        } catch(v36) {
            const v41 = [1337,1337,1337];
            const v42 = [3664180981,3664180981,"string","string"];
            const v43 = {valueOf:v42,length:v41,toString:parseFloat,constructor:"string",c:parseFloat};
            const v44 = v41.__proto__;
            const v48 = [v31];
            const v50 = [255,255,255];
            let v52 = 0;
            const v53 = {a:255,toString:arguments,c:v48,__proto__:v50,valueOf:DataView,constructor:"gM8oAednYn"};
        }
        return v30;
    }
    const v54 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:v31,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v31};
    const v56 = new Proxy(v30,v54);
    v56[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
