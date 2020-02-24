function main() {
function v6(v7,v8,v9,v10) {
    'use strict'
    const v11 = {};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v12 = v11;
    for (let v16 = 0; v16 <= 9; v16++) {
        v12.length = -4257244591;
    }
    try {
        const v18 = "function".includes(v10,v9);
        // v18 = .boolean
    } catch(v19) {
    }
    return v7;
}
const v20 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "preventExtensions", "setPrototypeOf", "deleteProperty", "ownKeys", "call", "get", "isExtensible", "has", "construct", "set"])
const v22 = new Proxy(RegExp,v20);
// v22 = .unknown
v22[-2923725353] = "boolean";
}
%NeverOptimizeFunction(main);
main();
