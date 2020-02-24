function main() {
const v5 = ["5hV/2mbTBY","5hV/2mbTBY",1320432668,1320432668];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = v5.__proto__;
// v6 = .object()
v6.constructor = Uint16Array;
const v10 = [1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v11 = [-4294967295,13.37,2];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v12 = v10;
const v15 = [];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v17 = {d:String};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["d"])
const v19 = Object.defineProperty(v11,65537,v17);
// v19 = .undefined
const v20 = {length:1337,e:1337,c:v15,a:1337,toString:"symbol"};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "length", "c", "e", "a"])
function v22(v23,v24,v25,v26) {
    'use strict'
    try {
        const v28 = v11.concat(1337,v12,v11,"name",v26);
        // v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    } catch(v29) {
    }
}
const v30 = {deleteProperty:v22,set:v22,getPrototypeOf:v22,call:v22,preventExtensions:v22,isExtensible:v22,construct:v22,get:v22,ownKeys:v22,setPrototypeOf:v22,has:v22};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "deleteProperty", "construct", "has", "ownKeys", "getPrototypeOf", "isExtensible", "get", "call", "setPrototypeOf"])
const v32 = new Proxy(v20,v30);
// v32 = .unknown
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
