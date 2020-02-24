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
        // v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v26 = v25;
const v27 = v1(v26);
// v27 = .unknown
const v28 = v1(1024,4.0);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
