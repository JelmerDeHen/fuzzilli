function main() {
const v2 = {a:isFinite};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        const v11 = v2.a(-225787572,"boolean",8,v2,"boolean");
        // v11 = .unknown
        do {
            const v15 = v2.a(v11);
            // v15 = .unknown
            function v17(v18,v19) {
            }
            const v20 = {get:v17,set:Object};
            // v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            let v23 = 0;
            do {
                const v24 = v23 + 1;
                // v24 = .primitive
                v23 = v24;
            } while (v23 < 4096);
            v10 = "boolean";
        } while (v10 < 8);
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v27 = v26;
const v28 = v3(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
