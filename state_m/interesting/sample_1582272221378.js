function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v7 = {construct:String,isExtensible:String,preventExtensions:Object};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "preventExtensions", "isExtensible"])
const v9 = new Proxy(Int32Array,v7);
// v9 = .unknown
const v10 = Object.values(v9);
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
}
%NeverOptimizeFunction(main);
main();
