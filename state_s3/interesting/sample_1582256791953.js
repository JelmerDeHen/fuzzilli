function main() {
function v0(v1,v2) {
    let v6 = 0;
    do {
        let v9 = 0;
        do {
            const v10 = v9 + 1;
            // v10 = .primitive
            for (let v13 = 0; v13 < v9; v13++) {
            }
            v9 = v10;
        } while (v9 < 7);
        const v14 = v6 + 1;
        // v14 = .primitive
        v6 = v14;
    } while (v6 < 8);
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v17 = v16;
const v18 = v0(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
