function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {b:v5,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v6 = .object(ofGroup: Object, withProperties: ["a", "b", "valueOf", "e", "length", "__proto__"])
const v9 = "object".constructor;
// v9 = .function()
const v11 = {defineProperty:Object,ownKeys:gc,get:v9,has:v9,isExtensible:Object};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "ownKeys", "get", "has", "isExtensible"])
const v13 = new Proxy(v6,v11);
// v13 = .unknown
v13.valueOf = gc;
}
%NeverOptimizeFunction(main);
main();
