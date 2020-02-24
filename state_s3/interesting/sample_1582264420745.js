function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
function v3(v4,v5) {
    v3.prototype = 3008129548;
}
let v9 = 0;
do {
    for (let v13 = 0; v13 < 100; v13++) {
        const v14 = v3(v2,1337);
        // v14 = .unknown
    }
    const v15 = v9 + 1;
    // v15 = .primitive
    v9 = v15;
} while (v9 < 9);
}
%NeverOptimizeFunction(main);
main();
