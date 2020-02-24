function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v9 = "boolean";
            const v10 = v9 + 1;
            // v10 = .primitive
            const v11 = v9[3];
            // v11 = .unknown
            const v12 = typeof v10;
            // v12 = .string
            const v14 = v12 === "number";
            // v14 = .boolean
            for (let v18 = 0; v18 < 6; v18++) {
            }
            const v19 = v8 + 1;
            // v19 = .primitive
            v8 = v19;
        } while (v8 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v22 = v21;
const v23 = v1(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
