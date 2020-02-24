function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {d:v4,e:-256,c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["c", "d", "__proto__", "e"])
const v9 = {e:v7,length:v8,a:13.37,d:Boolean,toString:"unscopable",__proto__:v4};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "e", "a", "length"], withMethods: ["d"])
const v11 = Symbol.toStringTag;
// v11 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Array[v11] = v9;
const v16 = [13.37];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v19 = Object.seal(Array);
// v19 = .object()
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v22 = {d:v16,e:-256,c:13.37};
// v22 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "c", "d"])
const v23 = {e:v21,length:v22,a:13.37,d:Boolean,toString:"unscopable",__proto__:v16};
// v23 = .object(ofGroup: Object, withProperties: ["toString", "a", "e", "__proto__", "length"], withMethods: ["d"])
const v25 = Symbol.toStringTag;
// v25 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Array[v25] = v23;
}
%NeverOptimizeFunction(main);
main();
