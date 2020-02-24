function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            const v11 = [];
            // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            let v12 = "function";
            let v15 = 2947655073;
            const v16 = v15 * v6;
            // v16 = .number
            v11[v16] = v12;
            const v17 = v9 + 1;
            // v17 = .primitive
            v9 = v17;
        } while (v9 < 8);
    }
}
const v18 = [v2];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v19 = v18;
const v20 = v2(v19);
// v20 = .unknown
const v21 = v1.sort(v2);
// v21 = .undefined
}
%NeverOptimizeFunction(main);
main();
