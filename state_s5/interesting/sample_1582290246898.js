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
    const v13 = v6 << "undefined";
    // v13 = .integer
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v17 = v16;
const v18 = v1(v17);
// v18 = .unknown
const v19 = v1(1024,4.0);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();