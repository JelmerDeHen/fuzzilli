function main() {
const v3 = {constructor:"symbol",length:9007199254740993};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v11 = [13.37,v3];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
for (let v15 = 0; v15 < 100; v15++) {
}
const v16 = v11[1024];
// v16 = .unknown
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
}
%NeverOptimizeFunction(main);
main();
