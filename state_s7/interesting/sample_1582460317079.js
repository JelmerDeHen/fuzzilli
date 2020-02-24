function main() {
const v3 = [1337,1337,1337,"xcycrfnQjT",1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v11 = Object.defineProperties(this,v8,v8);
        // v11 = .undefined
    } catch(v12) {
    }
}
const v13 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:2002848391,a:v4,setPrototypeOf:v4,has:v4};
// v13 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["set", "getPrototypeOf", "preventExtensions", "a", "setPrototypeOf", "deleteProperty", "call", "has", "construct", "isExtensible"])
const v15 = new Proxy(v3,v13);
// v15 = .unknown
v15.constructor = v3;
const v16 = v13 > 1337;
// v16 = .boolean
}
%NeverOptimizeFunction(main);
main();
