function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {b:v5,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v6 = .object(ofGroup: Object, withProperties: ["length", "e", "b", "a", "__proto__", "valueOf"])
const v9 = "number".constructor;
// v9 = .function()
const v11 = {defineProperty:Object,ownKeys:gc,get:v9,has:v9,isExtensible:Object};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "isExtensible", "has", "ownKeys", "get"])
const v13 = new Proxy(v6,v11);
// v13 = .unknown
with (v13) {
    const v15 = hasInstance[hasInstance];
    // v15 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
