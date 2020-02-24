function main() {
const v2 = [1337,1337,1337,1337,1337];
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v9 = {};
        for (let v13 = 0; v13 < 3; v13++) {
        }
        for (let v17 = 0; v17 < 100; v17++) {
            const v18 = v4();
        }
        let v19 = v9;
        const v24 = [2153514987,1,13.37,13.37,v8];
        const v26 = [v19,v24,v24];
        const v27 = {length:13.37,e:"NEGATIVE_INFINITY",valueOf:v24,__proto__:v26};
        const v28 = {a:1337,toString:v9,constructor:"NEGATIVE_INFINITY",valueOf:v27,b:13.37,c:JSON,e:JSON};
    } catch(v29) {
    }
}
const v30 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
const v32 = new Proxy(v2,v30);
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
