function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
function v5(v6,v7,v8) {
}
const v10 = [13.37,13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = v10.splice(5);
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v11[5] = v5;
const v15 = ~v10;
// v15 = .boolean
v11["xynJaNgkpr"] = 13.37;
v10.length = 2571468423;
}
%NeverOptimizeFunction(main);
main();
