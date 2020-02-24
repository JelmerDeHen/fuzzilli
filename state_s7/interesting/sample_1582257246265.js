function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = Object.seal(Array);
// v7 = .object()
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = {d:v4,e:-256,c:13.37};
// v10 = .object(ofGroup: Object, withProperties: ["c", "d", "__proto__", "e"])
const v11 = {e:v9,length:v10,a:13.37,d:Boolean,toString:"unscopable",__proto__:v4};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "a", "length", "e"], withMethods: ["d"])
const v16 = Symbol.toStringTag;
// v16 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
Array[v16] = v11;
}
%NeverOptimizeFunction(main);
main();
