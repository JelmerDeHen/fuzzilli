function main() {
const v2 = {a:isFinite};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        const v11 = v2.a(-225787572,"boolean",8,v2,"boolean");
        // v11 = .unknown
        do {
            const v15 = v10 + 1;
            // v15 = .primitive
            function v18(v19,v20) {
            }
            try {
                const v22 = {get:v18,set:Object};
                // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
                const v24 = Object.defineProperty("undefined","e",v22);
                // v24 = .undefined
            } catch(v25) {
                const v26 = v11.matchAll;
                // v26 = .unknown
                const v28 = Object.create(Symbol,v26);
                // v28 = .object()
            }
            v10 = v15;
        } while (v10 < 8);
    }
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v31 = v30;
const v32 = v3(v31);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
