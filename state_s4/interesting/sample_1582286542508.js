function main() {
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v12 = 0;
            const v13 = v12 / 5.0;
            // v13 = .number
            const v14 = "__proto__".slice(v13,v5);
            // v14 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            const v17 = [13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v20 = new Int16Array("toString");
            // v20 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
            const v21 = {b:268435456,...v20,...v17};
            // v21 = .object(ofGroup: Object, withProperties: ["byteLength", "length", "b", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["some", "shift", "entries", "join", "set", "push", "keys", "find", "filter", "includes", "lastIndexOf", "splice", "fill", "reduce", "indexOf", "forEach", "concat", "pop", "copyWithin", "unshift", "subarray", "findIndex", "sort", "reverse", "values", "flatMap", "toString", "slice", "flat", "map", "every", "reduceRight", "toLocaleString"])
            const v22 = v10 + 1;
            // v22 = .primitive
            v10 = v22;
        } while (v10 < 8);
    }
    return 13.37;
}
const v24 = [7];
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v25 = v24;
const v26 = v3(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
