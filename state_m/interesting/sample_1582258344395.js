function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        function v6(v7,v8,v9,v10,v11) {
            return v6;
        }
        const v13 = v6();
        // v13 = .unknown
        for (let v21 = 0; v21 < 10; v21++) {
            const v22 = new v13(Reflect,Reflect,v21,v21);
            // v22 = .object()
        }
        let v25 = 0;
        const v28 = new Int16Array(19873);
        // v28 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
        for (const v29 of v28) {
        }
    }
    const v31 = [1337];
    // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v32 = v31;
    const v33 = v3(v32);
    // v33 = .unknown
    const v34 = v2 + 1;
    // v34 = .primitive
    v2 = v34;
} while (v2 <= 3);
}
%NeverOptimizeFunction(main);
main();
