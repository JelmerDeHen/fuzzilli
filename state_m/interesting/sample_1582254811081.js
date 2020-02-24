function main() {
function v0(v1,v2) {
    let v5 = -2908695906;
    for (const v6 in "undefined") {
        let v9 = 0;
        do {
            let v12 = 0;
            do {
                const v13 = v12 + 1;
                // v13 = .primitive
                v12 = v13;
            } while (v12 < 7);
            const v14 = v9 + 1;
            // v14 = .primitive
            v9 = v14;
        } while (v9 < 8);
    }
    const v15 = ~v5;
    // v15 = .boolean
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
const v20 = v0();
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
