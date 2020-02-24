function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {d:v4,e:-256,c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["d", "c", "__proto__", "e"])
const v9 = {e:v7,length:v8,a:13.37,d:Boolean,toString:"unscopable",__proto__:v4};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "a", "length", "e", "__proto__"], withMethods: ["d"])
const v11 = Symbol.toStringTag;
// v11 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
Array[v11] = v9;
const v16 = [13.37];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v19 = Object.seal(Array);
// v19 = .object()
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v22 = {d:v16,e:-256,c:13.37};
// v22 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "c", "e"])
const v23 = {e:v21,length:v22,a:13.37,d:Boolean,toString:"unscopable",__proto__:v16};
// v23 = .object(ofGroup: Object, withProperties: ["e", "toString", "__proto__", "length", "a"], withMethods: ["d"])
const v25 = Symbol.toStringTag;
// v25 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
Array[v25] = v23;
}
%NeverOptimizeFunction(main);
main();
