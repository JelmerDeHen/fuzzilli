function main() {
const v4 = [1337];
const v5 = [13.37,1337,13.37];
const v6 = {d:1337,e:v5};
const v7 = {valueOf:v5,__proto__:512,a:v4,length:13.37,b:v6,constructor:v6,toString:Float32Array};
let v8 = v7;
const v11 = [3547739757,3547739757,3547739757,3547739757,3547739757];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        let v19 = 0;
        let v22 = 0;
        for (let v26 = 0; v26 < 100; v26++) {
            const v27 = v12(2,v8,10);
        }
        const v28 = v22 + 1;
        const v30 = Int16Array();
    } catch(v31) {
    }
}
const v32 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
const v34 = new Proxy(v11,v32);
v34[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
