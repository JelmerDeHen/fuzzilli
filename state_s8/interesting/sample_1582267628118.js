function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v8 = 0;
        do {
            Object.valueOf = v2;
            for (let v12 = 0; v12 < 5; v12++) {
                const v13 = Object.valueOf;
                // v13 = .unknown
            }
            const v14 = v8 + 1;
            // v14 = .primitive
            v8 = v14;
        } while (v8 < 8);
    }
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v17 = v16;
const v18 = v0(v17);
// v18 = .unknown
let v22 = 0;
}
%NeverOptimizeFunction(main);
main();
