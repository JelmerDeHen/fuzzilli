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
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
}
%NeverOptimizeFunction(main);
main();
