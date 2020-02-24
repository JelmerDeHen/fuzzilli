function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        for (let v11 = 0; v11 < 100; v11++) {
        }
        const v12 = 0 - v6;
        // v12 = .number
        const v15 = eval(1337);
        // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    }
    const v17 = [1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v18 = v17;
    const v19 = v4(v18);
    // v19 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
