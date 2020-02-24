function main() {
function v0(v1,v2) {
    let v6 = 0;
    do {
        const v8 = [1337,1337,1337];
        // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v10 = v6;
        while (v10 < 8) {
            for (const v12 in "object") {
            }
            const v13 = v10 + 1;
            // v13 = .primitive
            v10 = v13;
        }
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
