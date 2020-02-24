function main() {
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            let v13 = 0;
            const v14 = v13 / 5.0;
            // v14 = .number
            const v15 = "__proto__".slice(v14,v6);
            // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            const v18 = [13.37];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v21 = new Int16Array("toString");
            // v21 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
            const v22 = {b:268435456,...v21,...v18};
            // v22 = .object(ofGroup: Object, withProperties: ["byteLength", "buffer", "__proto__", "b", "constructor", "length", "byteOffset"], withMethods: ["reverse", "map", "pop", "findIndex", "reduceRight", "set", "slice", "indexOf", "unshift", "sort", "every", "splice", "copyWithin", "includes", "find", "lastIndexOf", "flatMap", "values", "fill", "shift", "subarray", "reduce", "entries", "toLocaleString", "keys", "flat", "toString", "concat", "push", "forEach", "join", "filter", "some"])
            const v23 = v11 + 1;
            // v23 = .primitive
            v11 = v23;
        } while (v11 < 8);
    }
    return 13.37;
}
const v25 = [7];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v26 = v25;
const v27 = v4(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
