function main() {
let v3 = 0;
let v7 = 0;
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v18 = {b:v17,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "b", "a", "e"])
const v22 = "object".constructor;
// v22 = .function()
const v23 = {deleteProperty:gc,has:v22,set:gc,construct:v22,setPrototypeOf:gc,getOwnPropertyDescriptor:gc,preventExtensions:gc,apply:gc,getPrototypeOf:v22,isExtensible:gc};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "apply", "construct", "set", "getPrototypeOf", "deleteProperty", "isExtensible", "setPrototypeOf", "has", "getOwnPropertyDescriptor"])
const v25 = new Proxy(v18,v23);
// v25 = .unknown
const v26 = {preventExtensions:gc,apply:gc,construct:v25,isExtensible:v25,deleteProperty:v25,call:gc};
// v26 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__", "construct", "deleteProperty"], withMethods: ["call", "apply", "preventExtensions"])
const v27 = {e:1,getOwnPropertyDescriptor:v26,length:v26,constructor:v25,...v25,...13.37};
// v27 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "constructor", "__proto__", "length", "e"])
}
%NeverOptimizeFunction(main);
main();
