function main() {
const v2 = [13.37,"string"];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = v2[1024];
// v3 = .unknown
let v6 = 0;
do {
    const v9 = new Int16Array(19873);
    // v9 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    for (const v10 in v9) {
    }
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    const v16 = v6 + 1;
    // v16 = .primitive
    v6 = v16;
} while (v6 < 3);
}
%NeverOptimizeFunction(main);
main();
