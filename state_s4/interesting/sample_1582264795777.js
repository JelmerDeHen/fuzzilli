function main() {
function v1(v2,v3) {
    let v6 = -128;
    do {
        const v9 = {c:13.37};
        // v9 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
        const v11 = Array(0);
        // v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        v11[0] = v9;
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
