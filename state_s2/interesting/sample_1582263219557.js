function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v2 = [13.37,v1];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
function v9(v10,v11,v12) {
    for (const v13 in v10) {
    }
    return v10;
}
for (let v17 = 0; v17 < 100; v17++) {
    const v18 = v9(v2,9007199254740993,9007199254740993);
    // v18 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
