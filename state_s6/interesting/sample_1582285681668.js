function main() {
function v1(v2,v3) {
    let v6 = 0;
    for (const v7 in "undefined") {
        let v10 = 0;
        do {
            const v12 = v10 + 1;
            // v12 = .primitive
            v10 = v12;
        } while (v10 < 8);
    }
    const v13 = "undefined" - 1;
    // v13 = .primitive
    v6 = v13;
    const v14 = v6 + "undefined";
    // v14 = .primitive
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v18 = v17;
const v19 = v1(v18);
// v19 = .unknown
const v20 = v1(1024,4.0);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
