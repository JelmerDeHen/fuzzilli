function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v12 = -1;
            for (let v16 = 0; v16 < 1; v16++) {
                v12 = v6;
            }
            do {
                const v17 = v12 + 1;
                // v17 = .primitive
                const v18 = v12 / 13.37;
                // v18 = .number
                v12 = v17;
                const v19 = "__proto__".slice(v18,v4);
                // v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            } while (v12 < 7);
            const v20 = v9 + 1;
            // v20 = .primitive
            v9 = v20;
        } while (v9 < 8);
    }
}
const v22 = [-138567527];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v23 = v22;
const v24 = v2(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
