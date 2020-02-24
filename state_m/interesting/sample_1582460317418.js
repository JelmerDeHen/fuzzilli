function main() {
const v3 = [1337,1337,1337,"xcycrfnQjT",1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v11 = Object.defineProperties(this,v8,v8);
        // v11 = .undefined
    } catch(v12) {
    }
}
const v13 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:2002848391,a:v4,setPrototypeOf:v4,has:v4};
// v13 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["deleteProperty", "preventExtensions", "getPrototypeOf", "isExtensible", "a", "setPrototypeOf", "call", "set", "construct", "has"])
const v15 = new Proxy(v3,v13);
// v15 = .unknown
v15.constructor = v3;
const v16 = v13 > 1337;
// v16 = .boolean
}
%NeverOptimizeFunction(main);
main();
