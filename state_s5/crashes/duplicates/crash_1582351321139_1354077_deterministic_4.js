function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [Reflect,"unscopable",16,1337];
const v8 = {length:v4,constructor:13.37,toString:v7,c:16};
const v9 = {valueOf:16,e:16,b:Reflect,length:v6,c:v8,toString:13.37,__proto__:v4};
const v13 = [1337,1337,1337,1337,1337];
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        let v20 = 0;
        const v21 = v20 + 1;
        for (let v25 = 0; v25 < 100; v25++) {
            const v26 = v14(v7,1337);
        }
        const v27 = {get:v18};
        const v29 = Object.defineProperty();
        const v31 = ArrayBuffer();
    } catch(v32) {
    }
}
const v33 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
const v35 = new Proxy(v13,v33);
v35[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
