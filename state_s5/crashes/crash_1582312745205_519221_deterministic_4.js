function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [v2];
const v6 = {};
const v7 = {d:v6,b:v2,a:1337,valueOf:1337};
const v8 = v4 | "isConcatSpreadable";
let v9 = v4;
const v10 = 13.37 == v6;
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        for (let v22 = 0; v22 < 100; v22++) {
            const v23 = v14(v18,"isConcatSpreadable",v17);
        }
        function v24(v25,v26) {
        }
        function v28(v29,v30) {
            return v28;
        }
        const v31 = v24();
        const v32 = v31();
        const v33 = Object.getOwnPropertyDescriptors();
    } catch(v34) {
    }
}
const v35 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:8,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v37 = new Proxy(v13,v35);
function v38(v39,v40,v41,v42) {
    'use strict'
}
let v43 = v37;
const v46 = new Proxy(v43,Object);
const v48 = Symbol.species;
v46[v48] = v38;
}
%NeverOptimizeFunction(main);
main();
