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
                return v11;
            }
            try {
                const v24 = {get:v20,set:Object};
                // v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
                const v26 = Object.defineProperty("undefined","e",v24);
                // v26 = .undefined
            } catch(v27) {
            }
            v10 = v17;
        } while (v10 < 8);
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v30 = v29;
const v31 = v3(v30);
// v31 = .unknown
let v34 = 0;
const v35 = v34 + 1;
// v35 = .primitive
v34 = v35;
}
%NeverOptimizeFunction(main);
main();
