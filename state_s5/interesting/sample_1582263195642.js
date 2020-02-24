function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v2 = [13.37,v1];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
