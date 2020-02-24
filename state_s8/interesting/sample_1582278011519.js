function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            for (let v12 = 0; v12 < 8; v12++) {
            }
            const v13 = v8 + 1;
            // v13 = .primitive
            v8 = v13;
        } while (v8 < 8);
    }
    const v16 = [13.37,13.37,13.37,13.37];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v18 = {b:v16,constructor:1337,d:-1107350769};
    // v18 = .object(ofGroup: Object, withProperties: ["d", "b", "constructor", "__proto__"])
    const v20 = Math.fround(v18);
    // v20 = .number
    return v20;
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v24 = v23;
const v25 = v1(v24);
// v25 = .unknown
const v26 = v1(1024,4.0);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
