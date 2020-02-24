function main() {
function v2(v3,v4) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            const v18 = new Int16Array(19873);
            // v18 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
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
        // v28 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    }
    for (let v33 = 0; v33 < 100; v33++) {
        const v34 = v22("boolean",1337);
        // v34 = .unknown
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v38 = v37;
const v39 = v2(v38);
// v39 = .unknown
const v40 = v2(1024,4.0);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
