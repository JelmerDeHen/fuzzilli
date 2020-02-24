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
        // v28 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
        for (const v29 of v28) {
        }
    }
    const v31 = [1337];
    // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
