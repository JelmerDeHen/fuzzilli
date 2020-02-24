function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v12 = 0;
            const v13 = v12 / 5.0;
            // v13 = .number
            const v14 = "__proto__".slice(v13,v4);
            // v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
            const v17 = [13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v20 = new Int16Array("toString");
            // v20 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
            const v21 = {b:268435456,...v20,...v17};
            // v21 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "byteLength", "byteOffset", "length", "buffer", "b"], withMethods: ["sort", "map", "shift", "some", "entries", "find", "reverse", "lastIndexOf", "pop", "indexOf", "toString", "push", "flatMap", "values", "findIndex", "set", "includes", "subarray", "keys", "concat", "toLocaleString", "unshift", "fill", "forEach", "reduceRight", "reduce", "splice", "flat", "filter", "every", "slice", "copyWithin", "join"])
            const v22 = v9 + 1;
            // v22 = .primitive
            v9 = v22;
        } while (v9 < 8);
    }
}
const v24 = [7];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v25 = v24;
const v26 = v2(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
