function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5) {
    const v8 = [1337,v4,1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v9 = v8.toString();
    // v9 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    const v11 = isNaN(v9);
    // v11 = .boolean
    const v12 = typeof v11;
    // v12 = .string
    const v14 = v12 === "object";
    // v14 = .boolean
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            const v19 = v18 + 1;
            // v19 = .primitive
            v18 = v19;
        } while (v18 < 8);
    }
}
const v20 = v2.forEach(v3,"eeeRbEqfAO");
// v20 = .undefined
}
%NeverOptimizeFunction(main);
main();
