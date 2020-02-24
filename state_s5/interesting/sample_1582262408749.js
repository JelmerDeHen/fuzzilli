function main() {
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {d:gc,valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
const v6 = new Int8Array(v5);
// v6 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
Number.__proto__ = v6;
for (let v10 = 0; v10 < 3; v10++) {
    const v12 = [1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v13 = v12;
    let v15 = undefined;
    for (let v20 = 0; v20 < 10; v20++) {
        const v22 = [1337];
        // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        let v23 = v22;
        let v25 = undefined;
        for (const v28 in Number) {
        }
        for (const v29 in "boolean") {
            let v32 = 0;
            function v33(v34,v35) {
                let v39 = 0;
                const v40 = v39 + 1;
                // v40 = .primitive
                const v42 = 0 instanceof Number;
                // v42 = .boolean
                v39 = v40;
            }
            const v44 = [1337];
            // v44 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            let v45 = v44;
            const v46 = v33(v45);
            // v46 = .unknown
            const v47 = v32 + 1;
            // v47 = .primitive
            const v50 = eval(1337);
            // v50 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
            v32 = v47;
        }
    }
    let v53 = 0;
    const v54 = v53 + 1;
    // v54 = .primitive
    v53 = v54;
}
}
%NeverOptimizeFunction(main);
main();
