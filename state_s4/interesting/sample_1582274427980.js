function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v6,"number"];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {constructor:1337,e:-9007199254740993,valueOf:v4};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "e", "valueOf", "__proto__"])
const v9 = {valueOf:"number",length:v6,a:Float32Array,constructor:v6,c:v6,__proto__:v6};
// v9 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "valueOf", "constructor", "length"])
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
