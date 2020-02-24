function main() {
const v4 = [630095.7762638449];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {__proto__:v6,b:v7,c:Array,length:3307584944,toString:630095.7762638449};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "toString", "length"], withMethods: ["c"])
const v9 = v4.__proto__;
// v9 = .object()
const v10 = ~Array;
// v10 = .boolean
v6.b = 1337;
const v11 = {b:Array,valueOf:Array,c:630095.7762638449,e:v7};
// v11 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "c"], withMethods: ["b", "valueOf"])
let v12 = v4;
let v15 = 0;
const v19 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v19 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        const v27 = new Int16Array(26640);
        // v27 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
        const v28 = v27.subarray();
        // v28 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "__proto__", "length", "byteLength", "constructor", "buffer"], withMethods: ["some", "fill", "indexOf", "map", "slice", "copyWithin", "find", "keys", "every", "set", "entries", "values", "filter", "reverse", "reduce", "findIndex", "includes", "reduceRight", "lastIndexOf", "sort", "subarray", "join", "forEach"])
        let v29 = 563841718;
        const v30 = v28.lastIndexOf(v29,v23,26640);
        // v30 = .integer
        v24[1097233620] = v24;
    } catch(v31) {
    }
    return v19;
}
const v32 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:"search",setPrototypeOf:v20,has:v20};
// v32 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__"], withMethods: ["set", "getPrototypeOf", "setPrototypeOf", "get", "has", "construct", "call", "preventExtensions", "isExtensible", "deleteProperty"])
const v34 = new Proxy(v19,v32);
// v34 = .unknown
v34[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
