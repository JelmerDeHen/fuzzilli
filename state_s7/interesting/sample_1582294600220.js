function main() {
length = Math;
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v4(v5,v6,v7,v8) {
    'use strict'
    let v11 = 0;
    while (v11 < 1337) {
        const v12 = v11 + 1;
        // v12 = .primitive
        v11 = v12;
    }
    const v17 = [];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v18 = {valueOf:v17,length:13.37,d:127,e:127};
    // v18 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "e", "length"])
    const v19 = {c:v17,valueOf:v18,d:Array,a:1337};
    // v19 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "__proto__", "c"], withMethods: ["d"])
    length = v19;
}
const v20 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "construct", "getPrototypeOf", "setPrototypeOf", "ownKeys", "set", "call", "has", "preventExtensions", "deleteProperty", "isExtensible"])
const v22 = new Proxy(v3,v20);
// v22 = .unknown
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
