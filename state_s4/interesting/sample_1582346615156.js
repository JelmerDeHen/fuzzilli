function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [-1024,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {__proto__:13.37,toString:-1024,b:1337,constructor:-1024,length:v7,e:v6};
// v8 = .object(ofGroup: Object, withProperties: ["e", "length", "toString", "b", "__proto__", "constructor"])
const v9 = {__proto__:"NEGATIVE_INFINITY",b:"NEGATIVE_INFINITY",constructor:WeakSet,a:13.37,length:v8,c:v4};
// v9 = .object(ofGroup: Object, withProperties: ["b", "c", "constructor", "a", "__proto__", "length"])
const v11 = [13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = {b:v11};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v17 = [Uint8ClampedArray,13.37,2];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v18 = v9;
const v21 = [];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v23 = {get:Uint8ClampedArray};
// v23 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v25 = Object.seal(v17,65537,v23);
// v25 = .object()
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v28 = v27;
let v30 = undefined;
let v34 = 0;
const v36 = v34 + 1;
// v36 = .primitive
v18 = v28;
v34 = v36;
const v37 = {length:1337,e:1337,c:v21,a:1337,toString:"symbol"};
// v37 = .object(ofGroup: Object, withProperties: ["c", "e", "a", "__proto__", "toString", "length"])
function v39(v40,v41,v42,v43) {
    'use strict'
    const v45 = v17.includes(1337,v18,v17,"name",v43);
    // v45 = .boolean
}
const v46 = {deleteProperty:v12,set:v39,getPrototypeOf:v39,call:v39,preventExtensions:v39,isExtensible:v39,construct:v39,get:v39,ownKeys:v39,setPrototypeOf:v39,has:v39};
// v46 = .object(ofGroup: Object, withProperties: ["__proto__", "deleteProperty"], withMethods: ["call", "ownKeys", "get", "has", "setPrototypeOf", "getPrototypeOf", "set", "construct", "isExtensible", "preventExtensions"])
const v48 = new Proxy(v37,v46);
// v48 = .unknown
v48[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
