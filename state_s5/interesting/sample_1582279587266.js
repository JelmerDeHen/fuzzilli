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
                // v19 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
            } while (v12 < 7);
            const v20 = v9 + 1;
            // v20 = .primitive
            v9 = v20;
        } while (v9 < 8);
    }
}
const v22 = [-138567527];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v23 = v22;
const v24 = v2(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
