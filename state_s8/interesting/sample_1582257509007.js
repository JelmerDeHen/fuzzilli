function main() {
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v7 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "e", "__proto__", "a", "length"])
const v11 = "object".constructor;
// v11 = .function()
const v12 = {deleteProperty:gc,has:v11,toString:gc,construct:v11,setPrototypeOf:gc,getOwnPropertyDescriptor:gc,preventExtensions:gc,apply:gc,getPrototypeOf:v11,isExtensible:gc};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "getPrototypeOf", "deleteProperty", "construct", "has", "toString", "getOwnPropertyDescriptor", "isExtensible", "setPrototypeOf", "apply"])
const v14 = new Proxy(v7,v12);
// v14 = .unknown
v14[v12] = Uint16Array;
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
}
%NeverOptimizeFunction(main);
main();
