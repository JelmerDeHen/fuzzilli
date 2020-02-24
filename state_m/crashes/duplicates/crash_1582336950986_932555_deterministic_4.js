function main() {
const v3 = [13.37,13.37];
const v5 = [1337];
const v6 = [];
const v7 = {a:"boolean",valueOf:1337};
const v8 = {d:"boolean",e:String,a:String,constructor:1337,length:v5};
const v11 = [1337,1337,1337,1337,1337];
let v13 = 0;
const v14 = v13 + 1;
function v16(v17,v18,v19,v20) {
    'use strict'
    try {
        const v21 = {};
        let v22 = v21;
        const v27 = [2153514987,1,13.37,13.37,v20];
        for (let v32 = 0; v32 < 100; v32++) {
            const v33 = v16();
        }
        const v34 = typeof v3;
        const v36 = v34 === "function";
        const v37 = [v22,v27,v27];
        const v38 = {length:13.37,e:"NEGATIVE_INFINITY",valueOf:v27,__proto__:v37};
        const v39 = {a:1337,toString:v21,constructor:"NEGATIVE_INFINITY",valueOf:v38,b:13.37,c:JSON,e:JSON};
        const v41 = JSON.stringify(v39,Reflect);
    } catch(v42) {
    }
}
const v43 = {deleteProperty:v16,set:v16,getPrototypeOf:v16,call:v16,preventExtensions:v16,isExtensible:v16,construct:v16,get:v16,ownKeys:v16,setPrototypeOf:v16,has:v16};
const v45 = new Proxy(v11,v43);
v45[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
