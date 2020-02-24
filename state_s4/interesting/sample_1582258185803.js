function main() {
function v1(v2,v3) {
    let v10 = 0;
    v10 = 8;
    return v2;
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v14 = v13;
const v15 = v1(v14);
// v15 = .unknown
const v16 = v1();
// v16 = .unknown
v15.length = 2;
v13[1337] = 13.37;
}
%NeverOptimizeFunction(main);
main();
