function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v12 = 0;
            const v13 = v12 / 5.0;
            // v13 = .number
            const v14 = "__proto__".slice(v13,v4);
            // v14 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            const v17 = [13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v20 = new Int16Array("toString");
            // v20 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
            const v21 = {b:268435456,...v20,...v17};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "buffer", "b", "length", "byteOffset", "constructor", "byteLength"], withMethods: ["concat", "indexOf", "find", "values", "copyWithin", "fill", "unshift", "push", "entries", "toString", "flatMap", "sort", "reduce", "pop", "slice", "reduceRight", "includes", "forEach", "splice", "set", "reverse", "findIndex", "lastIndexOf", "some", "subarray", "filter", "map", "every", "toLocaleString", "keys", "join", "flat", "shift"])
            const v22 = v9 + 1;
            // v22 = .primitive
            v9 = v22;
        } while (v9 < 8);
    }
}
const v24 = [7];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v25 = v24;
const v26 = v2(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
