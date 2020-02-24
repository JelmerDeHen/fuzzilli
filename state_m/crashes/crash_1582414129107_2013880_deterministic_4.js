function main() {
const v4 = [13.37];
const v6 = [1337,1337];
const v7 = [];
const v8 = {d:"string"};
const v9 = {toString:v4,d:"string",b:v6,length:13.37};
let v10 = 9007199254740993;
const v12 = [1337,1337,1337,1337,1337];
const v14 = [13.37];
const v16 = {get:gc,set:gc};
const v18 = Object.defineProperty(v8,358937190,v16);
const v20 = [1337,1337,1337,1337,1337];
function v21(v22,v23,v24,v25) {
    'use strict'
    try {
        v24.constructor = v14;
        let v28 = 0;
        do {
            const v29 = v18 >> v28;
            const v30 = v28 + 1;
            v28 = v30;
        } while (v28 < 2);
        const v31 = v25.cosh();
    } catch(v32) {
        const v33 = v32 - 1;
    }
}
const v34 = {deleteProperty:v21,set:v21,getPrototypeOf:v21,call:v21,preventExtensions:v21,isExtensible:v21,construct:v21,get:v21,ownKeys:v21,setPrototypeOf:v21,has:v21};
const v36 = new Proxy(v20,v34);
v36.constructor = v14;
const v37 = v7.push();
let v39 = 0;
const v40 = v7 + 1;
const v41 = typeof 1337;
const v43 = v41 === "function";
for (const v44 in v34) {
    let v46 = 0;
    const v47 = v16.get();
}
for (let v51 = 0; v51 < 0; v51++) {
    try {
        function v52(v53,v54,v55,v56,v57) {
        }
    } catch(v58) {
        let v60 = 0;
        const v61 = ["string",...v6];
    }
}
}
%NeverOptimizeFunction(main);
main();
