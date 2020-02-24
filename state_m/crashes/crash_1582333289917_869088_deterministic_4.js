function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337,1337];
const v6 = [];
const v7 = {a:v6,b:v6};
const v8 = {e:"object",c:v3,d:v6,b:3928750139};
let v9 = v5;
const v11 = [1337,1337,1337,1337,1337];
let v12 = v11;
const v14 = typeof v12;
const v16 = v14 === "boolean";
let v17 = v12;
const v18 = 13.37 - "MIN_VALUE";
let v20 = 0;
const v21 = {};
const v23 = [1337,1337,1337,1337,1337];
function v24(v25,v26,v27,v28) {
    'use strict'
    try {
        v11.__proto__ = v28;
        const v31 = [13.37,13.37];
        const v32 = v31[1024];
        const v33 = {has:gc,construct:v32,defineProperty:v32,deleteProperty:gc,setPrototypeOf:gc,preventExtensions:v32,isExtensible:v32,call:v32,set:gc,getOwnPropertyDescriptor:gc};
        const v35 = Proxy();
        const v37 = [1337];
    } catch(v38) {
        const v39 = v28 + v28;
    }
}
const v40 = {deleteProperty:v24,set:v24,getPrototypeOf:v24,call:v24,preventExtensions:v24,isExtensible:v24,construct:v24,get:v24,ownKeys:v24,setPrototypeOf:v24,has:v24};
const v42 = new Proxy(v23,v40);
v42[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
