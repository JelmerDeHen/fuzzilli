function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v7 = 0 + "boolean";
        // v7 = .primitive
        const v8 = v2 << v2;
        // v8 = .integer
        let v9 = 0;
        do {
            const v13 = v9 + 1;
            // v13 = .primitive
            const v16 = eval(1337);
            // v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            v9 = v13;
        } while (v9 < 8);
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v19 = v18;
const v20 = v0(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
