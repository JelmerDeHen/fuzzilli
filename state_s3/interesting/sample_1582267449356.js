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
            // v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
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
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v27 = v26;
const v28 = v3(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
