function main() {
const v3 = [13.37,13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [Int16Array,v5];
const v7 = {c:13.37,e:v6,a:v3,b:4294967297};
const v8 = {c:1337,toString:13.37};
let v9 = v7;
const v12 = ["constructor","constructor",1320432668,1320432668];
const v15 = [1337,1337,1337,1337,1337];
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        const v22 = [13.37];
        let v23 = v22;
        const v24 = v22.__proto__;
        for (let v28 = 0; v28 < 100; v28++) {
            const v29 = v16();
        }
        const v30 = v7.atan2();
        let v32 = 0;
        for (const v33 in v18) {
        }
    } catch(v34) {
    }
}
const v35 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
const v37 = new Proxy(v15,v35);
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
