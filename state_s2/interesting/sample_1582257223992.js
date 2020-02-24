function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = Object.seal(Array);
// v7 = .object()
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v10 = {d:v4,e:-256,c:13.37};
// v10 = .object(ofGroup: Object, withProperties: ["e", "c", "d", "__proto__"])
const v11 = {e:v9,length:v10,a:13.37,d:Boolean,toString:"unscopable",__proto__:v4};
// v11 = .object(ofGroup: Object, withProperties: ["length", "toString", "a", "__proto__", "e"], withMethods: ["d"])
const v16 = Symbol.toStringTag;
// v16 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Array[v16] = v11;
}
%NeverOptimizeFunction(main);
main();
