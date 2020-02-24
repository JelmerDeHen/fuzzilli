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
        // v28 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
        for (const v29 of v28) {
        }
    }
    const v31 = [1337];
    // v31 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
