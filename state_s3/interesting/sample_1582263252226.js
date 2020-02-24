function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        let v8 = 0;
        try {
            const v9 = v8 in "undefined";
            // v9 = .boolean
        } catch(v10) {
        }
        const v13 = new Int16Array(19873);
        // v13 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
        for (const v14 of v13) {
        }
    }
    const v16 = [1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v17 = v16;
    const v18 = v3(v17);
    // v18 = .unknown
    const v19 = v2 + 1;
    // v19 = .primitive
    v2 = v19;
} while (v2 <= 3);
}
%NeverOptimizeFunction(main);
main();
