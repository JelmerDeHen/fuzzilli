function main() {
function v1(v2,v3) {
    let v6 = -128;
    do {
        const v9 = {c:13.37};
        // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
        const v11 = Array(0);
        // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        v11[8] = v9;
        const v12 = v6 + 1;
        // v12 = .primitive
        v6 = v12;
    } while (v6 < -2);
}
let v13 = 1337;
const v14 = v1(v13);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();
