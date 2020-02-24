function main() {
const v4 = 9007199254740991 / "undefined";
const v5 = "undefined".__proto__;
const v6 = {construct:isFinite,call:isFinite,deleteProperty:isFinite,isExtensible:isFinite,defineProperty:isFinite,apply:isFinite,ownKeys:isFinite,has:isFinite,get:isFinite};
const v8 = new Proxy(v5,v6);
for (const v9 in "MIN_VALUE") {
    const v10 = v9[9007199254740991];
}
const v12 = [13.37,13.37,13.37];
const v14 = [1337,1337,1337,1337,1337];
const v15 = [v14,1337,isFinite,"MIN_VALUE"];
const v16 = {};
const v17 = {toString:v14,valueOf:9007199254740991,constructor:v12};
let v18 = v16;
const v21 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v22(v23,v24,v25,v26) {
    'use strict'
    try {
        const v28 = [1564090189,1564090189,1564090189];
        const v30 = [Infinity,Infinity,Infinity];
        const v31 = [v26,v30];
        const v32 = v31.toLocaleString();
        let v33 = Infinity;
        let v34 = v32;
        for (const v36 in "object") {
            const v39 = [1337,1337,1337,1337,1337];
            function v40(v41,v42,v43,v44) {
                'use strict'
                try {
                    v44[3] = v44;
                } catch(v45) {
                    let v47 = 0;
                    const v48 = v47 + 1;
                    const v51 = 2.2250738585072014e-308 / 3890419937;
                    const v52 = [v51];
                    let v53 = v52;
                    const v55 = Math.acosh(v53);
                }
                return v39;
            }
            const v56 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:v40,has:v40};
            const v58 = new Proxy(v39,v56);
            v58[1] = "MIN_VALUE";
        }
        for (let v62 = 0; v62 < 4; v62++) {
        }
    } catch(v63) {
    }
}
const v64 = {c:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
const v66 = new Proxy(v21,v64);
v66[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
