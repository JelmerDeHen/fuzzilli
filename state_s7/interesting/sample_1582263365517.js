function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v5 = [arguments,arguments];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = v5[-128];
// v6 = .unknown
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v16 = 0;
        while (v16 < 1) {
            const v17 = !v16;
            // v17 = .boolean
            v16 = v17;
        }
        let v18 = 0;
        do {
            for (const v20 of "pvU0UUjoya") {
            }
            const v21 = v18 + 1;
            // v21 = .primitive
            v18 = v21;
        } while (v18 < 8);
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v24 = v23;
const v25 = v7(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
