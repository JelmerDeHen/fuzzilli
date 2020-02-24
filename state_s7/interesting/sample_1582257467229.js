function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v10 = -1578544024;
            const v11 = ~v10;
            // v11 = .boolean
            const v12 = v8 + 1;
            // v12 = .primitive
            v8 = v12;
        } while (v8 < 8);
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v16 = v15;
const v17 = v1(v16);
// v17 = .unknown
const v18 = v1(1024,4.0);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
