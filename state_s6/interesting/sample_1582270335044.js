function main() {
let v2 = 0;
do {
    function v5(v6,v7) {
        try {
            let v9 = undefined;
            const v10 = {get:v9,set:v5};
            // v10 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["set"])
            const v12 = Object.defineProperty(Math,9,v10);
            // v12 = .undefined
        } catch(v13) {
        }
    }
    const v15 = [1337];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v16 = v15;
    const v17 = v5(v16);
    // v17 = .unknown
    const v18 = v2 + 1;
    // v18 = .primitive
    v2 = v18;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
