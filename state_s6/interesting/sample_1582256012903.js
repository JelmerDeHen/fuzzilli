function main() {
let v1 = eval;
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v4 = v3;
const v9 = [13.37,13.37,Uint16Array,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v12 = {b:v11,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v12 = .object(ofGroup: Object, withProperties: ["a", "length", "b", "__proto__", "valueOf", "e"])
const v15 = "object".constructor;
// v15 = .function()
const v17 = {defineProperty:v15,setPrototypeOf:gc,isExtensible:gc,getOwnPropertyDescriptor:v15,deleteProperty:Object,set:v15};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "defineProperty", "getOwnPropertyDescriptor", "deleteProperty", "setPrototypeOf", "set"])
const v19 = new Proxy(v12,v17);
// v19 = .unknown
const v20 = {deleteProperty:Object,has:v1,call:v19,ownKeys:v1,apply:v15,preventExtensions:v15,get:Object,isExtensible:v19,setPrototypeOf:v19,set:Object,getPrototypeOf:eval,construct:v1};
// v20 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__", "call", "isExtensible"], withMethods: ["deleteProperty", "apply", "ownKeys", "set", "getPrototypeOf", "get", "construct", "has", "preventExtensions"])
const v22 = new Proxy(v9,v20);
// v22 = .unknown
v22.valueOf = v4;
}
%NeverOptimizeFunction(main);
main();
