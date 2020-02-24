function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
function v5(v6,v7) {
    for (let v11 = 0; v11 < 10; v11++) {
        function v12(v13,v14) {
            for (const v16 in "boolean") {
                let v17 = v5;
                const v18 = v17 + 1;
                // v18 = .primitive
                v17 = v0;
            }
        }
        const v20 = [1337];
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v21 = v20;
        const v22 = v12(v21);
        // v22 = .unknown
    }
}
const v26 = [v0];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v27 = v26;
const v28 = v5(v27);
// v28 = .unknown
v3 = v4;
}
%NeverOptimizeFunction(main);
main();
