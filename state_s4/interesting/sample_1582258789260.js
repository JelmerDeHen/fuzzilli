function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        let v15 = 0;
        const v16 = v15 + 1;
        // v16 = .primitive
        v15 = v16;
        do {
            const v20 = v12 + 1;
            // v20 = .primitive
            try {
                for (const v23 in "e") {
                }
                const v24 = "undefined".slice(3);
                // v24 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            } catch(v25) {
            }
            v12 = v20;
        } while (v12 < 8);
    }
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v28 = v27;
const v29 = v5(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
