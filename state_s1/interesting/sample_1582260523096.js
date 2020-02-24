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
        // v21 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        let v25 = 0;
        const v29 = new Int16Array(19873);
        // v29 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
        for (const v30 of v29) {
        }
    }
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
