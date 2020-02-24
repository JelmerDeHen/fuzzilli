function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        for (const v7 in "boolean") {
            const v9 = Array(v2);
            // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v10 = v9.indexOf();
            // v10 = .integer
        }
    }
}
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
