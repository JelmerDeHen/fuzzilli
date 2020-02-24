function main() {
let v1 = "unscopable";
const v3 = {valueOf:1337};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
function v4(v5,v6) {
    function v7(v8,v9) {
        return v5;
    }
    for (let v13 = 0; v13 < 2; v13++) {
    }
    for (const v15 in "boolean") {
        v5[v15] = v15;
        let v18 = 0;
        while (v18 < 6) {
            const v19 = v15 >= v18;
            // v19 = .boolean
            const v20 = v18 + 1;
            // v20 = .primitive
            v18 = v20;
        }
        if (v6) {
            const v21 = v1.length;
            // v21 = .integer
        } else {
        }
        let v24 = 0;
        do {
            const v25 = [];
            // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v26 = typeof v15;
            // v26 = .string
            const v28 = v26 === "undefined";
            // v28 = .boolean
            v3[v28] = "undefined";
            let v30 = 0;
            const v31 = v30[3];
            // v31 = .unknown
            if (v31) {
            } else {
            }
            const v32 = v24 + 1;
            // v32 = .primitive
            v24 = v32;
        } while (v24 <= 8);
    }
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v35 = v34;
const v36 = v4(v35);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
