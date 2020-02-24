function main() {
function v0(v1,v2) {
    let v5 = 0;
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v11 = v10 + 1;
            // v11 = .primitive
            const v14 = eval(1337);
            // v14 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            v10 = v11;
        } while (v10 < 8);
    }
    let v16 = v5;
    const v17 = v16 >= 0;
    // v17 = .boolean
    const v18 = v17 / 4096;
    // v18 = .number
    const v21 = new Int16Array(19873);
    // v21 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v24 = v23;
const v25 = v0(v24);
// v25 = .unknown
const v26 = v0();
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
