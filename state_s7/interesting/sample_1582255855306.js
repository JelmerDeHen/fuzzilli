function main() {
const v1 = {a:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v9 = v1;
        let v12 = 0;
        do {
            const v13 = v12 + 1;
            // v13 = .primitive
            v12 = v13;
            const v17 = [13.37,13.37,13.37,13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v19 = [v17,471091797,DataView];
            // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v20 = {c:1337};
            // v20 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
            const v21 = {constructor:v17,toString:v20,__proto__:471091797,length:v19};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "toString"])
            const v22 = typeof v21;
            // v22 = .string
            const v24 = v22 === "object";
            // v24 = .boolean
            const v25 = typeof v24;
            // v25 = .string
            const v27 = v25 === "object";
            // v27 = .boolean
        } while (v12 <= 7);
    }
}
const v28 = [-9007199254740992];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v29 = v28;
const v30 = v3(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
