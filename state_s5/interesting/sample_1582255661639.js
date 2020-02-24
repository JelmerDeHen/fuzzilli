function main() {
let v4 = Int16Array;
const v7 = [1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = [13.37,v7];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = {b:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
let v10 = "PI";
v10 = v10;
const v11 = {d:v4,c:Int8Array,...v7,...-3729873761,...v9,...-3729873761};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "c", "b", "constructor", "length"], withMethods: ["toLocaleString", "find", "map", "includes", "join", "copyWithin", "pop", "filter", "sort", "entries", "splice", "reverse", "shift", "lastIndexOf", "flat", "unshift", "concat", "flatMap", "push", "some", "slice", "values", "findIndex", "reduceRight", "fill", "keys", "indexOf", "forEach", "toString", "every", "reduce"])
}
%NeverOptimizeFunction(main);
main();
