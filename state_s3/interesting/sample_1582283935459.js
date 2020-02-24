function main() {
let v2 = 0;
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v5 = v4;
let v7 = undefined;
let v10 = v5;
try {
    const v13 = {b:2147483647};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    function v14(v15,v16) {
    }
    const v17 = (13.37).toString(v14,v13);
    // v17 = .unknown
} catch(v18) {
}
const v19 = v2 + 1;
// v19 = .primitive
v2 = v19;
}
%NeverOptimizeFunction(main);
main();
