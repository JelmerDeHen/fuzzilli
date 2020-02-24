function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v2(v3,v4,v5,v6) {
    'use strict'
    try {
        const v7 = v4();
        // v7 = .unknown
        const v8 = v7[-2900725722];
        // v8 = .unknown
        const v14 = 1.7976931348623157e+308 << 13.37;
        // v14 = .integer
        let v25 = 0;
        let v35 = -256;
    } catch(v48) {
    }
}
const v49 = {deleteProperty:v2,set:v2,getPrototypeOf:v2,call:v2,preventExtensions:v2,isExtensible:v2,construct:v2,get:v2,ownKeys:v2,setPrototypeOf:v2,has:v2};
// v49 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "setPrototypeOf", "deleteProperty", "call", "preventExtensions", "getPrototypeOf", "get", "isExtensible", "has", "ownKeys", "set"])
const v51 = new Proxy(v1,v49);
// v51 = .unknown
v51[1] = v51;
}
%NeverOptimizeFunction(main);
main();
