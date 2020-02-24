function main() {
const v1 = {valueOf:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v6 = 0;
let v9 = 0;
function v10(v11,v12) {
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            const v18 = [];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v20 = typeof v14;
            // v20 = .string
            const v22 = v20 === "undefined";
            // v22 = .boolean
            "undefined".length = v14;
            v1[v22] = "undefined";
            const v23 = [1337,1337,1337];
            // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v25 = 0;
            const v26 = v25[3];
            // v26 = .unknown
            if (v26) {
            } else {
                const v27 = v18.__proto__;
                // v27 = .object()
                const v28 = 0 % v27;
                // v28 = .number
            }
            const v29 = v17 + 1;
            // v29 = .primitive
            v17 = v29;
        } while (v17 < 8);
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v32 = v31;
const v33 = v10(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
