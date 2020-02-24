function main() {
let v3 = undefined;
let v7 = 0;
const v9 = v7 + 1;
// v9 = .primitive
v7 = v9;
function v12(v13,v14) {
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            let v21 = 0;
            const v24 = [13.37,13.37,13.37];
            // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v26 = [1337,1337];
            // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v27 = [v26,v26,v26];
            // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v28 = "undefined" + 1;
            // v28 = .primitive
            const v29 = "boolean" === v28;
            // v29 = .boolean
            const v30 = v19 + 1;
            // v30 = .primitive
            v19 = v30;
        } while (v19 < 8);
    }
}
let v31 = Uint16Array;
const v32 = v12(v31);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
