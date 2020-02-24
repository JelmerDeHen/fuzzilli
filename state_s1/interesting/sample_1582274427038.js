function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v6,"number"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {constructor:1337,e:-9007199254740993,valueOf:v4};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "e", "__proto__"])
const v9 = {valueOf:"number",length:v6,a:Float32Array,constructor:v6,c:v6,__proto__:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c", "length", "constructor", "a"])
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
