function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {d:eval,valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["d"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
let v14 = 0;
while (v14 < 8) {
    v1.__proto__ = v5;
    const v15 = v14 + 1;
    // v15 = .primitive
    v14 = v15;
}
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
}
%NeverOptimizeFunction(main);
main();
