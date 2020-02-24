function main() {
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v12 = "boolean" >= "boolean";
            // v12 = .boolean
            const v15 = eval("undefined");
            // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            const v16 = v10 + 1;
            // v16 = .primitive
            v10 = v16;
        } while (v10 < 8);
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v19 = v18;
const v20 = v3(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
