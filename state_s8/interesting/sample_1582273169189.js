function main() {
let v3 = 0;
let v7 = 0;
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v18 = {b:v17,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v18 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "e", "b", "length", "__proto__"])
const v22 = "object".constructor;
// v22 = .function()
const v23 = {deleteProperty:gc,has:v22,set:gc,construct:v22,setPrototypeOf:gc,getOwnPropertyDescriptor:gc,preventExtensions:gc,apply:gc,getPrototypeOf:v22,isExtensible:gc};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "setPrototypeOf", "getOwnPropertyDescriptor", "isExtensible", "preventExtensions", "apply", "getPrototypeOf", "has", "deleteProperty", "set"])
const v25 = new Proxy(v18,v23);
// v25 = .unknown
const v26 = {preventExtensions:gc,apply:gc,construct:v25,isExtensible:v25,deleteProperty:v25,call:gc};
// v26 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__", "deleteProperty", "construct"], withMethods: ["call", "apply", "preventExtensions"])
const v27 = {e:1,getOwnPropertyDescriptor:v26,length:v26,constructor:v25,...v25,...13.37};
// v27 = .object(ofGroup: Object, withProperties: ["e", "length", "constructor", "getOwnPropertyDescriptor", "__proto__"])
}
%NeverOptimizeFunction(main);
main();
