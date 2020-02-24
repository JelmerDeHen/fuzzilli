function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = ["undefined"];
const v8 = {__proto__:v7,c:this,toString:v4,constructor:13.37,a:v6,e:1337,length:this,d:this};
const v9 = {b:1337,__proto__:v6,c:1337};
let v10 = 6;
const v13 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        for (let v23 = 0; v23 < 100; v23++) {
            const v24 = v14();
        }
        const v26 = [13.37,13.37,13.37,13.37,13.37];
        const v28 = [v26,1337,13.37];
        const v29 = {b:"toStringTag",c:v28};
        const v32 = [-1825918256];
        let v33 = v32;
        const v35 = [1337,Infinity,Infinity];
        const v36 = [v33,v35];
        const v37 = v36.toLocaleString();
        const v38 = {c:v37,d:v29};
        let v40 = 0;
        let v41 = v38;
    } catch(v42) {
    }
}
const v43 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v45 = new Proxy(v13,v43);
v45[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
