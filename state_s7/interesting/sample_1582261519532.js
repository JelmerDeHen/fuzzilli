function main() {
function v1(v2,v3) {
    let v6 = "boolean";
    let v9 = 0;
    const v11 = v9 + 1;
    // v11 = .primitive
    v9 = v11;
    function v12(v13,v14) {
        for (const v16 in "boolean") {
            let v19 = 0;
            do {
                const v21 = v19 + 1;
                // v21 = .primitive
                v19 = v21;
            } while (v19 < 8);
        }
        for (const v23 in "boolean") {
            let v25 = 0;
            do {
                let v27 = v25;
                while (v27 < 9) {
                    const v28 = v27 % 9;
                    // v28 = .number
                    const v29 = v28 + 1;
                    // v29 = .primitive
                    v27 = v29;
                }
                const v30 = v25 + 1;
                // v30 = .primitive
                v25 = v30;
            } while (v25 < v25);
        }
    }
    const v32 = [1337];
    // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v33 = v32;
    const v34 = v12(v33);
    // v34 = .unknown
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v39 = v38;
const v40 = v1(v39);
// v40 = .unknown
const v41 = v1(1024,4.0);
// v41 = .unknown
let v45 = 0;
let v48 = 0;
}
%NeverOptimizeFunction(main);
main();
