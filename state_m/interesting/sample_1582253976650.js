function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = {ownKeys:Array,construct:Array,set:Array,isExtensible:Array,has:Array,getOwnPropertyDescriptor:Array,call:Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "isExtensible", "getOwnPropertyDescriptor", "call", "construct", "set", "ownKeys"])
const v6 = new Proxy(v3,v4);
// v6 = .unknown
v6[0] = "pvU0UUjoya";
}
%NeverOptimizeFunction(main);
main();
