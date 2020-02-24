function main() {
function v2(v3,v4) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            const v18 = new Int16Array(19873);
            // v18 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
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
        // v28 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    }
    for (let v33 = 0; v33 < 100; v33++) {
        const v34 = v22("boolean",1337);
        // v34 = .unknown
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v38 = v37;
const v39 = v2(v38);
// v39 = .unknown
const v40 = v2(1024,4.0);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
