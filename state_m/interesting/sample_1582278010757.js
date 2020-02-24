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
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v18 = {b:v16,constructor:1337,d:-1107350769};
    // v18 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "b", "d"])
    const v20 = Math.fround(v18);
    // v20 = .number
    return v20;
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v24 = v23;
const v25 = v1(v24);
// v25 = .unknown
const v26 = v1(1024,4.0);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
