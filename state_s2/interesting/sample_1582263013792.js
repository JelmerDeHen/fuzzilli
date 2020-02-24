function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v10 = v8 + 1;
// v10 = .primitive
v8 = v10;
const v12 = {valueOf:1337};
// v12 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
function v13(v14,v15) {
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            const v21 = [];
            // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v23 = typeof v17;
            // v23 = .string
            const v25 = v23 >= "object";
            // v25 = .boolean
            "object".length = v17;
            v12[v25] = "object";
            const v26 = [1337,1337,1337];
            // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v27 = [];
            // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v29 = 0;
            const v30 = v29[3];
            // v30 = .unknown
            let v32 = 0;
            const v33 = v26 + 1;
            // v33 = .primitive
            if (v30) {
            } else {
            }
            const v34 = v20 + 1;
            // v34 = .primitive
            v20 = v34;
        } while (v20 < 8);
    }
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v37 = v36;
const v38 = v13(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
