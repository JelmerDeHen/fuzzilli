function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = Object.seal(Array);
// v7 = .object()
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = {d:v4,e:-256,c:13.37};
// v10 = .object(ofGroup: Object, withProperties: ["c", "d", "e", "__proto__"])
const v11 = {e:v9,length:v10,a:13.37,d:Boolean,toString:"unscopable",__proto__:v4};
// v11 = .object(ofGroup: Object, withProperties: ["e", "toString", "a", "__proto__", "length"], withMethods: ["d"])
const v16 = Symbol.toStringTag;
// v16 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Array[v16] = v11;
}
%NeverOptimizeFunction(main);
main();
