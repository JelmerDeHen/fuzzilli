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
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v19 = v18;
        const v21 = [1337];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v22 = v21;
        let v24 = undefined;
        const v27 = eval(1337);
        // v27 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        let v30 = 1903240934;
        const v32 = new Int8Array(v30);
        // v32 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
        let v34 = undefined;
        const v37 = new Int16Array(19873);
        // v37 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
        for (const v38 of v37) {
        }
        v34 = DataView;
        return v34;
    }
    const v40 = [1337];
    // v40 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
