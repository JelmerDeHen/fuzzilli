function main() {
let v2 = 0;
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            try {
                const v15 = eval(1337);
                // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
                const v16 = RegExp.apply(v15,Array);
                // v16 = .unknown
            } catch(v17) {
            }
            const v18 = v10 + 1;
            // v18 = .primitive
            v10 = v18;
        } while (v10 < 8);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v21 = v20;
const v22 = v3(v21);
// v22 = .unknown
const v23 = v2 + 1;
// v23 = .primitive
v2 = v23;
}
%NeverOptimizeFunction(main);
main();
