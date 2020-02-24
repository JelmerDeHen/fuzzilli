function main() {
function v1(v2,v3) {
    let v6 = 0;
    for (const v7 in "undefined") {
        let v10 = 0;
        do {
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
        } while (v10 < 8);
    }
    const v12 = ~"undefined";
    // v12 = .boolean
    v6 = v12;
    const v13 = v6 & "undefined";
    // v13 = .integer
}
const v16 = [-65537];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v17 = v16;
const v18 = v1(v17);
// v18 = .unknown
const v19 = v1(1024,4.0);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
