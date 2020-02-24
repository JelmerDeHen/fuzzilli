function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v8 = v7 + 1;
            // v8 = .primitive
            v7 = v8;
        } while (v7 < 8);
    }
    const v11 = new Int16Array(19873);
    // v11 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    const v12 = v11.byteLength;
    // v12 = .integer
    for (const v13 of v11) {
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v16 = v15;
const v17 = v0(v16);
// v17 = .unknown
const v18 = v0();
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
