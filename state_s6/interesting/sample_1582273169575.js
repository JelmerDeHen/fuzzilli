function main() {
let v3 = 0;
let v7 = 0;
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v18 = {b:v17,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v18 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "length", "a", "__proto__", "e"])
const v22 = "object".constructor;
// v22 = .function()
const v23 = {deleteProperty:gc,has:v22,set:gc,construct:v22,setPrototypeOf:gc,getOwnPropertyDescriptor:gc,preventExtensions:gc,apply:gc,getPrototypeOf:v22,isExtensible:gc};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "getPrototypeOf", "preventExtensions", "getOwnPropertyDescriptor", "construct", "isExtensible", "set", "has", "setPrototypeOf", "apply"])
const v25 = new Proxy(v18,v23);
// v25 = .unknown
const v26 = {preventExtensions:gc,apply:gc,construct:v25,isExtensible:v25,deleteProperty:v25,call:gc};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__", "construct", "deleteProperty", "isExtensible"], withMethods: ["call", "apply", "preventExtensions"])
const v27 = {e:1,getOwnPropertyDescriptor:v26,length:v26,constructor:v25,...v25,...13.37};
// v27 = .object(ofGroup: Object, withProperties: ["length", "e", "getOwnPropertyDescriptor", "constructor", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
