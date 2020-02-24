function main() {
const v1 = {__proto__:536870912};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = [1468489541,13.37,2];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v9 = v7;
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v14 = {get:Uint8ClampedArray};
// v14 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v16 = Object.defineProperty(v8,65537,v14);
// v16 = .undefined
const v17 = {length:1337,e:1337,c:v12,a:1337,toString:"symbol"};
// v17 = .object(ofGroup: Object, withProperties: ["length", "e", "c", "toString", "a", "__proto__"])
function v19(v20,v21,v22,v23) {
    'use strict'
    try {
        const v25 = v8.pop(1337,v9,v8,"name",v23);
        // v25 = .unknown
    } catch(v26) {
    }
}
const v27 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "setPrototypeOf", "deleteProperty", "get", "getPrototypeOf", "set", "ownKeys", "call", "isExtensible", "has", "construct"])
const v29 = new Proxy(v17,v27);
// v29 = .unknown
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
