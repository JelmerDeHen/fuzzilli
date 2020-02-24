function main() {
const v3 = [59446.68221467873];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [v3,1337,3779702335];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v6(v7,v8) {
    const v10 = Math.abs(v7);
    // v10 = .number
    for (let v14 = 0; v14 < 100; v14++) {
    }
    return v10;
}
const v17 = v6(RegExp);
// v17 = .unknown
const v19 = v6(Uint32Array,v5);
// v19 = .unknown
const v20 = v6();
// v20 = .unknown
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
}
%NeverOptimizeFunction(main);
main();
