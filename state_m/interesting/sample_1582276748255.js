function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            const v9 = v8 + 1;
            // v9 = .primitive
            v8 = v9;
        } while (v8 < 8);
    }
    for (let v16 = 0; v16 < 100; v16++) {
        let v18 = undefined;
        const v20 = Math.fround(undefined);
        // v20 = .number
        const v22 = eval();
        // v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v26 = v25;
const v27 = v1(v26);
// v27 = .unknown
const v28 = v1(1024,4.0);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
