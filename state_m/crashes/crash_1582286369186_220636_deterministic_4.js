function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = [1337];
const v5 = {valueOf:v4,__proto__:13.37,a:Number,c:Number,b:Number};
let v6 = v2;
for (const v8 in "object") {
    const v11 = [1337,1337,1337,1337,1337];
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            v5.__proto__ = v15;
            const v18 = v6.constructor;
            const v19 = new Float32Array();
            v16[3] = v16;
        } catch(v20) {
            const v22 = Symbol.toPrimitive;
            const v24 = ["EXkcpBKht7"];
            let v25 = "EXkcpBKht7";
            const v26 = v24.includes();
            const v28 = [1337,1337];
            const v32 = "unscopable".concat(100);
            const v33 = [-372074.99096011615,v28,-372074.99096011615];
        }
        return v11;
    }
    const v34 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
    const v36 = new Proxy(v11,v34);
    v36[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
