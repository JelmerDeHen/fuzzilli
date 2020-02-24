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
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v17 = v16;
const v18 = v0(v17);
// v18 = .unknown
let v22 = 0;
}
%NeverOptimizeFunction(main);
main();
