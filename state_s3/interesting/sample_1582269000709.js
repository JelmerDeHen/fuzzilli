function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v12 = 0;
            const v13 = v12 / 5.0;
            // v13 = .number
            const v14 = "__proto__".slice(v13,v4);
            // v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            const v17 = [13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v20 = new Int16Array("toString");
            // v20 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
            const v21 = {b:268435456,...v20,...v17};
            // v21 = .object(ofGroup: Object, withProperties: ["buffer", "b", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["concat", "pop", "toLocaleString", "some", "values", "reduce", "flatMap", "splice", "map", "sort", "forEach", "shift", "copyWithin", "unshift", "join", "indexOf", "filter", "toString", "slice", "push", "reduceRight", "every", "includes", "fill", "find", "keys", "subarray", "entries", "findIndex", "flat", "reverse", "lastIndexOf", "set"])
            const v22 = v9 + 1;
            // v22 = .primitive
            v9 = v22;
        } while (v9 < 8);
    }
}
const v24 = [7];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v25 = v24;
const v26 = v2(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
