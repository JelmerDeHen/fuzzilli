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
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
