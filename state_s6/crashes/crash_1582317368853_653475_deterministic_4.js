function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337];
const v6 = [1337,9007199254740993,parseInt,9007199254740993];
const v8 = [1337,1337,1337,1337,1337];
const v9 = {valueOf:v8,__proto__:v8};
const v12 = [1337,1337,1337,1337,1337];
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        for (let v21 = 0; v21 < 100; v21++) {
            const v22 = v13();
        }
        let v24 = 0;
        const v25 = v24 + 1;
        const v26 = v9();
        const v27 = v26[-2900725722];
        for (const v28 in v27) {
        }
    } catch(v29) {
    }
}
const v30 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
const v32 = new Proxy(v12,v30);
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
