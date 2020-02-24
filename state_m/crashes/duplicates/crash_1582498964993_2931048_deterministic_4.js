function main() {
let v4 = 0;
const v5 = (0)["arguments"];
const v6 = v4 + 1;
const v8 = [13.37,13.37,13.37];
const v10 = [1337,1337,1337];
const v11 = [-9007199254740993,"arguments",v8,"arguments"];
const v12 = {d:1337,valueOf:"arguments",b:-9007199254740993,constructor:"arguments"};
const v13 = {c:"arguments"};
let v14 = v13;
const v16 = 10 >> v8;
const v17 = "arguments".split();
const v18 = new Uint8ClampedArray();
const v20 = v18.slice(5);
const v22 = [1337,1337,1337,1337,1337];
const v24 = [13.37,13.37,13.37,13.37,13.37];
function v25(v26,v27) {
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
            const v48 = [389335.2968186701];
            let v49 = v48;
            const v50 = Math.pow(v49);
            const v51 = Object.freeze();
            try {
                const v53 = Proxy();
                for (const v54 in v53) {
                }
            } catch(v55) {
            }
        }
        return v30;
    }
    const v56 = {deleteProperty:v31,set:v31,getPrototypeOf:v22,call:v31,preventExtensions:v31,isExtensible:v31,construct:v31,get:v31,ownKeys:v31,setPrototypeOf:v31,has:v31};
    const v58 = new Proxy(v30,v56);
    v58[1] = "MIN_VALUE";
}
const v59 = v24.some(v25);
}
%NeverOptimizeFunction(main);
main();
