function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v5(v6,v7) {
    let v11 = 0;
    const v12 = v11 + 1;
    // v12 = .primitive
    v11 = v12;
    return 13.37;
}
const v14 = v5(1024,4.0);
// v14 = .unknown
const v15 = v5(v2,1337);
// v15 = .unknown
const v16 = JSON.parse(v14,v15);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
