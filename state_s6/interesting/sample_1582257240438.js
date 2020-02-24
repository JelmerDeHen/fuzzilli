function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = Object.seal(Array);
// v7 = .object()
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = {d:v4,e:-256,c:13.37};
// v10 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "d", "e"])
const v11 = {e:v9,length:v10,a:13.37,d:Boolean,toString:"unscopable",__proto__:v4};
// v11 = .object(ofGroup: Object, withProperties: ["a", "e", "length", "toString", "__proto__"], withMethods: ["d"])
const v16 = Symbol.toStringTag;
// v16 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Array[v16] = v11;
}
%NeverOptimizeFunction(main);
main();
