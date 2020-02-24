function main() {
let v2 = 0;
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            try {
                const v15 = eval(1337);
                // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
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
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v21 = v20;
const v22 = v3(v21);
// v22 = .unknown
const v23 = v2 + 1;
// v23 = .primitive
v2 = v23;
}
%NeverOptimizeFunction(main);
main();
