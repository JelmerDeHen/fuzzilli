function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v10 = v8 + 1;
// v10 = .primitive
v8 = v10;
const v12 = {valueOf:1337};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
function v13(v14,v15) {
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            const v21 = [];
            // v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v23 = typeof v17;
            // v23 = .string
            const v25 = v23 >= "object";
            // v25 = .boolean
            "object".length = v17;
            v12[v25] = "object";
            const v26 = [1337,1337,1337];
            // v26 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v27 = [];
            // v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v37 = v36;
const v38 = v13(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
