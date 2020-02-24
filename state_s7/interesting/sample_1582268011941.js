function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        const v7 = "object".substring(1337,v3);
        // v7 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
        let v10 = 0;
        const v11 = v10 + 1;
        // v11 = .primitive
        v10 = v11;
        let v14 = 0;
        const v15 = v14 + 1;
        // v15 = .primitive
        v14 = v15;
        let v18 = 0;
        do {
            const v20 = [];
            // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            let v21 = "function";
            let v24 = 0;
            do {
                const v25 = v24 + 1;
                // v25 = .primitive
                v24 = v25;
            } while (v24 < 7);
            const v26 = v24 * 8;
            // v26 = .number
            v20[v26] = v21;
            const v27 = v18 + 1;
            // v27 = .primitive
            v18 = v27;
        } while (v18 < 8);
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v30 = v29;
const v31 = v2(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
