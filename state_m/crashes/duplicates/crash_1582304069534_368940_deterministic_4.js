function main() {
const v1 = [13.37];
const v3 = [1337];
const v6 = [1337,1337,1337,1337,1337];
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        for (let v15 = 0; v15 < 100; v15++) {
            const v16 = v7();
        }
        const v18 = Proxy();
        let v19 = v10;
        const v20 = {};
        let v21 = v20;
        const v25 = [13.37];
        const v26 = [];
        const v27 = {toString:1073741824,e:DataView,b:v26,valueOf:DataView,a:v25,constructor:DataView};
        const v28 = v19[v11];
    } catch(v29) {
    }
}
const v30 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
const v32 = new Proxy(v6,v30);
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
