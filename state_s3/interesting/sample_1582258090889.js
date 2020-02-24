function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v2(v3,v4) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            try {
                let v15 = 0;
                const v17 = v1 % 1;
                // v17 = .number
                const v19 = DataView(28997);
                // v19 = .unknown
            } catch(v20) {
            }
            const v28 = v12 + 1;
            // v28 = .primitive
            const v31 = eval(1337);
            // v31 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            v12 = v28;
        } while (v12 < 8);
    }
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v34 = v33;
const v35 = v2(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
