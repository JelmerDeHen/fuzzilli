function main() {
const v3 = [1337,1337,1337,"xcycrfnQjT",1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v11 = Object.defineProperties(this,v8,v8);
        // v11 = .undefined
    } catch(v12) {
    }
}
const v13 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:2002848391,a:v4,setPrototypeOf:v4,has:v4};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["setPrototypeOf", "set", "getPrototypeOf", "a", "deleteProperty", "preventExtensions", "call", "has", "construct", "isExtensible"])
const v15 = new Proxy(v3,v13);
// v15 = .unknown
v15.constructor = v3;
const v16 = v13 > 1337;
// v16 = .boolean
}
%NeverOptimizeFunction(main);
main();
