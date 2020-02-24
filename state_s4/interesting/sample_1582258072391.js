function main() {
const v2 = [13.37,"string"];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = v2[1024];
// v3 = .unknown
let v6 = 0;
do {
    const v9 = new Int16Array(19873);
    // v9 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
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
