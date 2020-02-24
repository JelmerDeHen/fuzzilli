function main() {
function v0(v1,v2) {
    let v6 = 0;
    do {
        let v9 = 0;
        while (v9 < 9) {
            const v10 = v9 % 9;
            // v10 = .number
            const v13 = new Int16Array(19873);
            // v13 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
            const v14 = v10 + 1;
            // v14 = .primitive
            v9 = v14;
        }
        const v18 = v6 + 1;
        // v18 = .primitive
        v6 = v18;
    } while (v6 < 8);
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v21 = v20;
const v22 = v0(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
