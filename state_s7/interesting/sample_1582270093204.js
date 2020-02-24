function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v11 = -1;
            do {
                const v12 = v11 + 1;
                // v12 = .primitive
                const v13 = v12 / v12;
                // v13 = .number
                v11 = v12;
                const v14 = "__proto__".slice(v13,v3);
                // v14 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            } while (v11 < 7);
            const v15 = v8 + 1;
            // v15 = .primitive
            v8 = v15;
        } while (v8 < 8);
    }
}
const v17 = [-138567527];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v18 = v17;
const v19 = v1(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
