function main() {
let v2 = 13.37;
function v4(v5,v6) {
    for (let v10 = 0; v10 < 0; v10++) {
        throw v2;
    }
    let v16 = 0;
    do {
        let v19 = 0;
        do {
            const v20 = v19 + 1;
            // v20 = .primitive
            v19 = v20;
        } while (v19 < 7);
        const v21 = v16 + 1;
        // v21 = .primitive
        v16 = v21;
    } while (v16 < 8);
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v25 = v24;
const v26 = v4(v25);
// v26 = .unknown
const v27 = v4(1024,4.0);
// v27 = .unknown
const v28 = v4(1337);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
