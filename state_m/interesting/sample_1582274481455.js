function main() {
const v3 = new Int16Array(19873);
// v3 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v5 = v4;
function v8(v9,v10) {
    let v16 = 0;
    let v19 = 0;
    do {
        let v22 = 0;
        do {
            const v23 = v22 + 1;
            // v23 = .primitive
            const v24 = [v23,v23,3];
            // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            v22 = v23;
        } while (v22 < 7);
        const v25 = v19 + 1;
        // v25 = .primitive
        v19 = v25;
    } while (v19 < 8);
    do {
        const v26 = v16 + 1;
        // v26 = .primitive
        v16 = v26;
    } while (v16 < 3);
    const v27 = v3[v16];
    // v27 = .unknown
    const v28 = v27[v5];
    // v28 = .unknown
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v32 = v31;
const v33 = v8(v32);
// v33 = .unknown
const v34 = v8(1024,4.0);
// v34 = .unknown
const v35 = v8(v34,v32);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
