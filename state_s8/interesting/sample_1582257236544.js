function main() {
const v2 = {a:isFinite};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        const v11 = v2.a(-225787572,"boolean",8,v2,"boolean");
        // v11 = .unknown
        do {
            for (let v15 = 0; v15 < 4; v15++) {
            }
            const v16 = v2.a(v11);
            // v16 = .unknown
            const v17 = v10 + 1;
            // v17 = .primitive
            function v20(v21,v22) {
            }
            try {
                const v24 = {get:v20,set:Object};
                // v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
                const v26 = Object.defineProperty("undefined","e",v24);
                // v26 = .undefined
            } catch(v27) {
            }
            v10 = v17;
        } while (v10 < 8);
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v30 = v29;
const v31 = v3(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
