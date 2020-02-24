function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = {b:v5,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "a", "valueOf", "length", "b"])
const v9 = "object".constructor;
// v9 = .function()
const v11 = {defineProperty:Object,ownKeys:gc,get:v9,has:v9,isExtensible:Object};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "has", "defineProperty", "get", "isExtensible"])
const v13 = new Proxy(v6,v11);
// v13 = .unknown
v13.valueOf = gc;
}
%NeverOptimizeFunction(main);
main();
