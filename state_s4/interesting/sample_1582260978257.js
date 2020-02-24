function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5) {
    const v8 = [1337,v4,1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v9 = v8.toString();
    // v9 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
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
