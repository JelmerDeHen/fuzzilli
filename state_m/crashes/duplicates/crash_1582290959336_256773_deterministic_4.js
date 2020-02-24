function main() {
const v1 = [1337,1337,1337,1337,1337];
const v2 = {valueOf:v1,__proto__:v1};
const v5 = [1337,1337,1337,1337,1337];
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v12 = [13.37];
        let v15 = 0;
        while (v15 < 4) {
            const v16 = v15 + 1;
            v15 = v16;
        }
        const v17 = v6();
        const v18 = v2();
        const v19 = v18[-2900725722];
        for (const v20 in v19) {
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
