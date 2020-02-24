function main() {
function v1(v2,v3) {
    let v6 = 0;
    for (const v7 in "POSITIVE_INFINITY") {
        let v10 = 0;
        do {
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
        } while (v10 < 8);
    }
    const v12 = "POSITIVE_INFINITY" - 1;
    // v12 = .primitive
    v6 = v12;
    const v13 = v6 + "POSITIVE_INFINITY";
    // v13 = .primitive
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v17 = v16;
const v18 = v1(v17);
// v18 = .unknown
const v19 = v1(1024,4.0);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
