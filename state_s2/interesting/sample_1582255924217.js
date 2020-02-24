function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v7 = "object";
function v8(v9,v10) {
    let v17 = 0;
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            try {
                let v24 = 0;
                do {
                    const v25 = v24 + 1;
                    // v25 = .primitive
                    v24 = v25;
                } while (v24 < 7);
            } catch(v26) {
                let v29 = 0;
                while (v29 >= 10) {
                }
            }
            const v33 = v21 + 1;
            // v33 = .primitive
            v21 = v33;
        } while (v21 < 8);
    }
    const v34 = v17 + 1;
    // v34 = .primitive
    v17 = v34;
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v38 = v37;
const v39 = v8(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
