function main() {
const v2 = [-1639136941,-1639136941,-1639136941,-1639136941,-1639136941];
function v3(v4,v5,v6,v7) {
    'use strict'
    function v8(v9,v10) {
        let v13 = -128;
        while (v13 < 5) {
            const v14 = v13 + 1;
            v13 = v14;
        }
        for (const v15 of v10) {
            const v16 = v8(v15,v15);
        }
    }
    const v18 = v8(0,v5);
}
const v19 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
const v21 = new Proxy(v2,v19);
v21[-824891246] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
