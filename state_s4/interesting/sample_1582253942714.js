function main() {
for (let v3 = 0; v3 < 100; v3++) {
}
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = [13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v13 = v12[65536];
// v13 = .unknown
const v14 = {get:gc,set:v13};
// v14 = .object(ofGroup: Object, withProperties: ["set", "__proto__"], withMethods: ["get"])
const v15 = v9[v14];
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
