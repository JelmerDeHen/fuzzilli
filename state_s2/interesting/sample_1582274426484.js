function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v6,"number"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {constructor:1337,e:-9007199254740993,valueOf:v4};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "constructor"])
const v9 = {valueOf:"number",length:v6,a:Float32Array,constructor:v6,c:v6,__proto__:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf", "c", "length", "a"])
let v10 = v6;
let v12 = "9gU0xT00QL";
let v15 = Infinity;
let v16 = v15;
const v17 = v16.toLocaleString();
// v17 = .unknown
const v18 = RegExp(v17);
// v18 = .object()
"9gU0xT00QL"[v17] = RegExp;
v17[v18] = v12;
for (const v19 of v9) {
}
const v20 = RegExp(v17);
// v20 = .object()
}
%NeverOptimizeFunction(main);
main();
