function main() {
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v8 = "function".includes(v7,v6);
        // v8 = .boolean
    } catch(v9) {
    }
}
const v10 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:"boolean",ownKeys:v3,setPrototypeOf:v3,has:v3};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["call", "isExtensible", "construct", "has", "ownKeys", "preventExtensions", "getPrototypeOf", "deleteProperty", "set", "setPrototypeOf"])
const v12 = new Proxy(RegExp,v10);
// v12 = .unknown
v12[-2923725353] = "boolean";
}
%NeverOptimizeFunction(main);
main();
