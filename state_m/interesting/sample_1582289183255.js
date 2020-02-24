function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        for (const v7 in "boolean") {
            const v9 = Array(v2);
            // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v10 = v9.indexOf();
            // v10 = .integer
        }
    }
}
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v13 = v12;
const v20 = v1(0,v12);
// v20 = .unknown
const v21 = v1(v13);
// v21 = .unknown
const v22 = v1(1337,"MOjsAQs5Xr");
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();
