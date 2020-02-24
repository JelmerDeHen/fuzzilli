function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [-1024,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {__proto__:13.37,toString:-1024,b:1337,constructor:-1024,length:v7,e:v6};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor", "length", "toString", "e"])
const v9 = {__proto__:"NEGATIVE_INFINITY",b:"NEGATIVE_INFINITY",constructor:WeakSet,a:13.37,length:v8,c:v4};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "c", "a", "b", "constructor"])
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v12 = {b:v11};
// v12 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v17 = [Uint8ClampedArray,13.37,2];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v18 = v9;
const v21 = [];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v23 = {get:Uint8ClampedArray};
// v23 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v25 = Object.seal(v17,65537,v23);
// v25 = .object()
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v28 = v27;
let v30 = undefined;
let v34 = 0;
const v36 = v34 + 1;
// v36 = .primitive
v18 = v28;
v34 = v36;
const v37 = {length:1337,e:1337,c:v21,a:1337,toString:"symbol"};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "toString", "e", "length", "c"])
function v39(v40,v41,v42,v43) {
    'use strict'
    const v45 = v17.includes(1337,v18,v17,"name",v43);
    // v45 = .boolean
}
const v46 = {deleteProperty:v12,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
// v46 = .object(ofGroup: Object, withProperties: ["__proto__", "deleteProperty"], withMethods: ["setPrototypeOf", "call", "has", "isExtensible", "ownKeys", "getPrototypeOf", "construct", "get", "set", "preventExtensions"])
const v48 = new Proxy(v37,v46);
// v48 = .unknown
v48[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
