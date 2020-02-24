function main() {
let v2 = 0;
while (v2 < 3) {
    function v3(v4,v5) {
        let v9 = 0;
        const v10 = v9 + 1;
        // v10 = .primitive
        let v13 = 0;
        const v14 = v13 + 1;
        // v14 = .primitive
        v13 = v14;
        v9 = v10;
        let v17 = 0;
        const v18 = v17 + 1;
        // v18 = .primitive
        const v21 = String.fromCharCode("__proto__",2011007354,v18,2011007354,v18);
        // v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        let v25 = 0;
        const v29 = new Int16Array(19873);
        // v29 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
        for (const v30 of v29) {
        }
    }
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v33 = v32;
    const v34 = v3(v33);
    // v34 = .unknown
    const v35 = v2 + 1;
    // v35 = .primitive
    v2 = v35;
}
}
%NeverOptimizeFunction(main);
main();
