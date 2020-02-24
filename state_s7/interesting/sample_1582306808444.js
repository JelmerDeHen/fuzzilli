function main() {
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v11 = "function".includes(v7,v6);
        // v11 = .boolean
    } catch(v12) {
    }
    return 0;
}
const v13 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "getPrototypeOf", "set", "preventExtensions", "setPrototypeOf", "call", "has", "construct", "isExtensible", "deleteProperty", "ownKeys"])
const v15 = new Proxy(RegExp,v13);
// v15 = .unknown
v15[-2923725353] = "boolean";
}
%NeverOptimizeFunction(main);
main();
