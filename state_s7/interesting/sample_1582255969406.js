function main() {
const v1 = eval();
// v1 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v4 = v3;
let v6 = undefined;
let v9 = 0;
do {
    function v10(v11,v12) {
        const v16 = new Int8Array(5215);
        // v16 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
        let v19 = 0;
        do {
            const v21 = v19 + 1;
            // v21 = .primitive
            v19 = v21;
        } while (v19 < 8);
        for (const v23 in "object") {
        }
    }
    const v25 = [1337];
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v26 = v25;
    const v27 = v10(v26);
    // v27 = .unknown
    let v30 = 0;
    const v31 = v30 + 1;
    // v31 = .primitive
    v30 = v31;
    const v32 = v9 + 1;
    // v32 = .primitive
    v9 = v32;
} while (v9 < 8);
}
%NeverOptimizeFunction(main);
main();
