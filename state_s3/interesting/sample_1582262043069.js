function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {d:v4,e:-256,c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "c"])
const v9 = {e:v7,length:v8,a:13.37,d:Boolean,toString:"unscopable",__proto__:v4};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "length", "a", "e", "__proto__"], withMethods: ["d"])
const v11 = Symbol.toStringTag;
// v11 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Array[v11] = v9;
const v16 = [13.37];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v19 = Object.seal(Array);
// v19 = .object()
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v22 = {d:v16,e:-256,c:13.37};
// v22 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__", "c"])
const v23 = {e:v21,length:v22,a:13.37,d:Boolean,toString:"unscopable",__proto__:v16};
// v23 = .object(ofGroup: Object, withProperties: ["a", "length", "toString", "e", "__proto__"], withMethods: ["d"])
const v25 = Symbol.toStringTag;
// v25 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Array[v25] = v23;
}
%NeverOptimizeFunction(main);
main();
