function main() {
const v1 = [1337,1337,1337,1337,1337];
const v2 = {valueOf:v1,__proto__:v1};
const v5 = [1337,1337,1337,1337,1337];
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        for (let v14 = 0; v14 < 100; v14++) {
            const v15 = v6();
        }
        const v16 = v2();
        const v17 = v16[-2900725722];
        for (const v18 in v17) {
            for (const v20 in Symbol) {
            }
        }
    } catch(v21) {
    }
}
const v22 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
const v24 = new Proxy(v5,v22);
v24[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
