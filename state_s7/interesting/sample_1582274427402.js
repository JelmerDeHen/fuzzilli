function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v6,"number"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {constructor:1337,e:-9007199254740993,valueOf:v4};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "constructor", "valueOf"])
const v9 = {valueOf:"number",length:v6,a:Float32Array,constructor:v6,c:v6,__proto__:v6};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "a", "__proto__", "length", "constructor"])
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
