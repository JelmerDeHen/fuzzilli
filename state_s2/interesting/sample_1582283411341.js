function main() {
let v4 = 0;
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v13 = 0;
const v14 = [v9];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = {valueOf:Int32Array,c:v9,__proto__:v14,b:v7};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "valueOf", "b"])
const v17 = new Map(v15);
// v17 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["keys", "delete", "entries", "clear", "has", "get", "forEach", "values", "set"])
const v18 = v4 + 1;
// v18 = .primitive
v4 = v18;
const v19 = v17.keys();
// v19 = .object()
const v20 = gc();
// v20 = .undefined
const v21 = gc();
// v21 = .undefined
}
%NeverOptimizeFunction(main);
main();
