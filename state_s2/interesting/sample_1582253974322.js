function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {ownKeys:Array,construct:Array,set:Array,isExtensible:Array,has:Array,getOwnPropertyDescriptor:Array,call:Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "ownKeys", "has", "set", "construct", "call", "getOwnPropertyDescriptor"])
const v6 = new Proxy(v3,v4);
// v6 = .unknown
v6[0] = "pvU0UUjoya";
}
%NeverOptimizeFunction(main);
main();
