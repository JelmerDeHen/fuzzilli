function main() {
function v2(v3,v4) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            const v18 = new Int16Array(19873);
            // v18 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
            const v19 = v15 + 1;
            // v19 = .primitive
            v15 = v19;
            const v20 = v12 + 1;
            // v20 = .primitive
            v12 = v20;
        } while (v12 < 8);
    }
    function v22(v23,v24) {
        const v25 = v24 / v24;
        // v25 = .number
        const v28 = eval(1337);
        // v28 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    }
    for (let v33 = 0; v33 < 100; v33++) {
        const v34 = v22("boolean",1337);
        // v34 = .unknown
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v38 = v37;
const v39 = v2(v38);
// v39 = .unknown
const v40 = v2(1024,4.0);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
