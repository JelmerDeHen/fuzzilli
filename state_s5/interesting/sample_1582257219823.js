function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = Object.seal(Array);
// v7 = .object()
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = {d:v4,e:-256,c:13.37};
// v10 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "c", "d"])
const v11 = {e:v9,length:v10,a:13.37,d:Boolean,toString:"unscopable",__proto__:v4};
// v11 = .object(ofGroup: Object, withProperties: ["toString", "length", "__proto__", "e", "a"], withMethods: ["d"])
const v16 = Symbol.toStringTag;
// v16 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
Array[v16] = v11;
}
%NeverOptimizeFunction(main);
main();
