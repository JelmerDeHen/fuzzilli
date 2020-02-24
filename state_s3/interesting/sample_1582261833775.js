function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            do {
                const v14 = v13 + 1;
                // v14 = .primitive
                v13 = v14;
            } while (v13 < 7);
            const v15 = v10 + 1;
            // v15 = .primitive
            v10 = v15;
        } while (v10 < 8);
        const v16 = Math.atan(Math);
        // v16 = .number
        let v17 = 0;
        const v18 = v17 + 1;
        // v18 = .primitive
        v17 = v18;
    }
    const v21 = new Int16Array(19873);
    // v21 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v24 = v23;
const v25 = v0(v24);
// v25 = .unknown
const v26 = v0();
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
