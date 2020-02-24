function main() {
let v1 = 0;
const v4 = [1337,1337,1337,1337,1337];
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        const v10 = {};
        let v11 = v10;
        let v14 = 0;
        const v15 = v14 + 1;
        for (let v19 = 0; v19 < 100; v19++) {
            const v20 = v5();
        }
        const v24 = [2153514987,13.37,13.37,13.37,v9];
        const v26 = [v11,v24,v24];
        const v27 = {toString:13.37,b:"SJlLk2U6S0",valueOf:v4,__proto__:v26};
        const v28 = {a:1337,toString:v6,constructor:"SJlLk2U6S0",valueOf:v27,b:13.37,c:JSON,e:JSON};
    } catch(v29) {
    }
}
const v30 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
const v32 = new Proxy(v4,v30);
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
