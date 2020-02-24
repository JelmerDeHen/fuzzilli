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
        // v21 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        let v25 = 0;
        const v29 = new Int16Array(19873);
        // v29 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
        for (const v30 of v29) {
        }
    }
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
