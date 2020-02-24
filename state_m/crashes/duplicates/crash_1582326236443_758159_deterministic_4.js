function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337];
const v4 = [v1,v1];
const v5 = typeof 13.37;
const v7 = v5 === "undefined";
const v10 = 0 << "undefined";
for (let v12 = 0; v12 < 7; v12++) {
}
const v13 = {constructor:v3,d:13.37};
const v14 = {b:1337,constructor:1337,c:13.37};
const v16 = [13.37,13.37,13.37,13.37];
const v19 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        for (let v28 = 0; v28 < 100; v28++) {
            const v29 = v20();
        }
        const v30 = ~v21;
        const v31 = {getOwnPropertyDescriptor:v23,ownKeys:v21,preventExtensions:v23,get:v20,getPrototypeOf:v21};
        const v33 = Proxy();
        const v34 = {ownKeys:v20,set:v33,get:v21,isExtensible:v20,setPrototypeOf:v22,deleteProperty:v33,apply:v22,call:v33,getOwnPropertyDescriptor:v33,getPrototypeOf:v33,construct:v23};
        const v36 = [Infinity,Infinity,Infinity];
        const v37 = [v24,v36];
        const v38 = v37.toLocaleString();
        let v39 = Infinity;
        let v40 = v38;
    } catch(v41) {
    }
}
const v42 = {c:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
const v44 = new Proxy(v19,v42);
v44[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
