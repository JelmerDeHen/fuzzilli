function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v2 = {a:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            for (let v15 = 0; v15 < 8; v15++) {
            }
            const v16 = v11 + 1;
            // v16 = .primitive
            v11 = v16;
        } while (v11 < 8);
    }
    const v19 = [13.37,13.37,13.37,13.37];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v21 = {b:v19,constructor:1337,d:-1107350769};
    // v21 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d", "constructor"])
    const v23 = Math.fround(v21);
    // v23 = .number
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v27 = v26;
const v28 = v4(v27);
// v28 = .unknown
const v29 = v4(1024,4.0);
// v29 = .unknown
const v30 = v4(1337,v2);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
