function main() {
const v1 = {};
const v2 = [v1,v1,v1,v1];
let v4 = 0;
const v5 = v4 + 1;
const v6 = [13.37];
const v9 = [1337,1337,1337,1337,1337];
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v16 = {};
        for (let v20 = 0; v20 < 100; v20++) {
            const v21 = v10();
        }
        const v22 = !0;
        const v23 = v9.length;
        const v24 = "hxma5EYO/b".repeat();
        let v25 = v16;
        const v30 = [2153514987,1000.0,1000.0,1000.0,v14];
        const v32 = [v25,v30,v30];
        const v33 = {length:1000.0,b:"NEGATIVE_INFINITY",valueOf:v9,__proto__:v32};
        const v34 = {a:1337,toString:v11,constructor:"NEGATIVE_INFINITY",valueOf:v33,b:1000.0,c:JSON,e:JSON};
    } catch(v35) {
    }
}
const v36 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
const v38 = new Proxy(v9,v36);
v38[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
