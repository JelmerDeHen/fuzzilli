function main() {
let v2 = 0;
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            try {
                const v15 = eval(1337);
                // v15 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
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
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v21 = v20;
const v22 = v3(v21);
// v22 = .unknown
const v23 = v2 + 1;
// v23 = .primitive
v2 = v23;
}
%NeverOptimizeFunction(main);
main();
