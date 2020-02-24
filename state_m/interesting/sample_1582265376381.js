function main() {
function v2(v3,v4) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            const v18 = new Int16Array(19873);
            // v18 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
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
        // v28 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    }
    for (let v33 = 0; v33 < 100; v33++) {
        const v34 = v22("boolean",1337);
        // v34 = .unknown
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v38 = v37;
const v39 = v2(v38);
// v39 = .unknown
const v40 = v2(1024,4.0);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
