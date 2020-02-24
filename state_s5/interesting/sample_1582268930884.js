function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {call:parseInt,ownKeys:parseInt,setPrototypeOf:parseInt,construct:parseInt,isExtensible:parseInt,getPrototypeOf:parseInt};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "setPrototypeOf", "construct", "ownKeys", "getPrototypeOf", "isExtensible"])
const v8 = new Proxy(v3,v6);
// v8 = .unknown
const v9 = {defineProperty:v8,get:v8,apply:v8,setPrototypeOf:v8,call:v8,construct:v8,has:parseInt};
// v9 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "defineProperty", "construct", "__proto__", "call", "apply", "get"], withMethods: ["has"])
const v11 = new Proxy(v5,v9);
// v11 = .unknown
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = {__proto__:"MOjsAQs5Xr",a:"MOjsAQs5Xr",valueOf:1337,e:v3,b:v12};
// v13 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "valueOf", "b"])
const v15 = {get:parseInt,set:parseInt};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v17 = Object.defineProperty(v13,1337,v15);
// v17 = .undefined
const v18 = v17 >= v17;
// v18 = .boolean
let v24 = 0;
let v36 = 0;
const v37 = Object.getOwnPropertyNames("MOjsAQs5Xr");
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
%NeverOptimizeFunction(main);
main();
