function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
