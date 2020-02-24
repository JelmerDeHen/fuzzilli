function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = [v2];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {a:v2};
// v4 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
let v5 = "nPF*7qPrrv";
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v8(v9,v10) {
    let v14 = 0;
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            let v21 = 0;
            do {
                const v22 = v21 + 1;
                // v22 = .primitive
                v21 = v22;
            } while (v21 < 7);
            let v25 = 0;
            while (v25 < 6) {
                v14 = 2983420631;
                const v26 = v25 + 1;
                // v26 = .primitive
                v25 = v26;
            }
            const v27 = v18 + 1;
            // v27 = .primitive
            v18 = v27;
        } while (v18 < 8);
    }
    const v28 = v14 + 1;
    // v28 = .primitive
    const v29 = v4.__proto__;
    // v29 = .object()
    let v32 = 0;
    const v33 = v3[2983420631];
    // v33 = .unknown
    const v34 = v32 + 1;
    // v34 = .primitive
    v32 = v34;
    return v28;
}
let v35 = v7;
const v36 = v8(v35);
// v36 = .unknown
const v37 = v8(1337);
// v37 = .unknown
v4.__proto__ = v7;
const v38 = v8(v5);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
