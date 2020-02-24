function main() {
let v2 = undefined;
function v5(v6,v7) {
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            const v16 = (1337).constructor;
            // v16 = .unknown
            const v17 = v16.bind("symbol",gc,8);
            // v17 = .unknown
            let v19 = 0;
            const v20 = v19 + 1;
            // v20 = .primitive
            const v21 = typeof 0;
            // v21 = .string
            const v23 = v21 === "string";
            // v23 = .boolean
            const v24 = v17(DataView,v16);
            // v24 = .unknown
            const v25 = v15 + 1;
            // v25 = .primitive
            v15 = v25;
        } while (v15 < 8);
    }
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v28 = v27;
const v29 = v5(v28);
// v29 = .unknown
let v38 = 0;
const v39 = v38 + 1;
// v39 = .primitive
v38 = v39;
}
%NeverOptimizeFunction(main);
main();
