function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "a", "e"])
let v5 = v4;
const v7 = [13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = [1337,v7];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v11(v12,v13) {
    for (const v15 in "boolean") {
        const v17 = [13.37,13.37,13.37,13.37];
        // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v19 = {b:2147483647};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
        function v20(v21,v22) {
            for (const v23 in v13) {
            }
            v21["boolean"] = v19;
            let v25 = 3239597223;
            let v27 = 0;
        }
        const v28 = v17.forEach(v20,v19);
        // v28 = .undefined
        let v31 = 0;
        do {
            const v32 = {};
            // v32 = .object(ofGroup: Object, withProperties: ["__proto__"])
            v32.a = "boolean";
            let v35 = 0;
            do {
            } while (v35 < 0);
            const v36 = v31 + 1;
            // v36 = .primitive
            v31 = v36;
            v35 = v5;
        } while (v31 < 8);
    }
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v39 = v38;
const v40 = v11(v39);
// v40 = .unknown
const v41 = v11(v9);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
