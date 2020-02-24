function main() {
let v2 = 0;
while (v2 < 3) {
    function v4(v5,v6) {
        for (const v8 in "boolean") {
            let v11 = 0;
            do {
                const v12 = v11 + 1;
                // v12 = .primitive
                let v15 = 0;
                while (v15 < 4) {
                    const v16 = v15 + 1;
                    // v16 = .primitive
                    v15 = v16;
                }
                v11 = v12;
            } while (v11 < 8);
        }
        const v18 = [1337];
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v19 = v18;
        const v21 = [1337];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v22 = v21;
        let v24 = undefined;
        const v27 = eval(1337);
        // v27 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
        let v30 = 1903240934;
        const v32 = new Int8Array(v30);
        // v32 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
        let v34 = undefined;
        const v37 = new Int16Array(19873);
        // v37 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
        for (const v38 of v37) {
        }
        v34 = DataView;
        return v34;
    }
    const v40 = [1337];
    // v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v41 = v40;
    const v42 = v4(v41);
    // v42 = .unknown
    const v43 = v2 + 1;
    // v43 = .primitive
    v2 = v43;
}
}
%NeverOptimizeFunction(main);
main();
