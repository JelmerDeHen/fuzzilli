function main() {
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            for (let v20 = 0; v20 < 6; v20++) {
                for (let v24 = 0; v24 < 100; v24++) {
                    function v25(v26,v27) {
                        return v5;
                    }
                }
            }
            let v28 = 0;
            const v29 = v28 + 1;
            // v29 = .primitive
            v28 = v29;
            const v35 = v13 + 1;
            // v35 = .primitive
            v13 = v35;
        } while (v13 < 8);
    }
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v39 = v38;
const v40 = v6(v39);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
