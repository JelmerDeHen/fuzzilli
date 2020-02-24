function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,v3,Int8Array];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        try {
            const v12 = eval("p/*jYvlqtn");
            // v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        } catch(v13) {
        }
        let v16 = 0;
        do {
            let v19 = 0;
            while (v19 < 3) {
                const v20 = v19 + 1;
                // v20 = .primitive
                v19 = v20;
            }
            let v21 = -4096;
            const v22 = v21 % v19;
            // v22 = .number
            const v23 = v22 || v5;
            // v23 = .boolean
            const v24 = v16 + 1;
            // v24 = .primitive
            v16 = v24;
        } while (v16 < 8);
    }
}
const v25 = v5(v4);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
