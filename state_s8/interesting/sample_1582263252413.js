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
        // v13 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
        for (const v14 of v13) {
        }
    }
    const v16 = [1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
