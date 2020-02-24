function main() {
let v3 = 0;
let v7 = 0;
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v18 = {b:v17,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "valueOf", "b", "e"])
const v22 = "object".constructor;
// v22 = .function()
const v23 = {deleteProperty:gc,has:v22,set:gc,construct:v22,setPrototypeOf:gc,getOwnPropertyDescriptor:gc,preventExtensions:gc,apply:gc,getPrototypeOf:v22,isExtensible:gc};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "has", "getPrototypeOf", "deleteProperty", "setPrototypeOf", "preventExtensions", "set", "getOwnPropertyDescriptor", "isExtensible", "apply"])
const v25 = new Proxy(v18,v23);
// v25 = .unknown
const v26 = {preventExtensions:gc,apply:gc,construct:v25,isExtensible:v25,deleteProperty:v25,call:gc};
// v26 = .object(ofGroup: Object, withProperties: ["deleteProperty", "isExtensible", "construct", "__proto__"], withMethods: ["preventExtensions", "apply", "call"])
const v27 = {e:1,getOwnPropertyDescriptor:v26,length:v26,constructor:v25,...v25,...13.37};
// v27 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "length", "constructor", "__proto__", "e"])
}
%NeverOptimizeFunction(main);
main();
