function main() {
let v1 = 0;
const v2 = v1 + 1;
// v2 = .primitive
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            for (const v13 of "pvU0UUjoya") {
            }
            const v14 = v11 + 1;
            // v14 = .primitive
            v11 = v14;
        } while (v11 < 8);
    }
    const v17 = [1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v18 = v17;
    const v20 = new Float32Array(Float32Array,v18,undefined);
    // v20 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
    const v23 = 1337 == 13.37;
    // v23 = .boolean
    let v24 = v20;
    v24[v2] = v23;
}
let v28 = 0;
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v31 = v30;
const v32 = v4(v31);
// v32 = .unknown
const v33 = v4(1024,4.0);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
