function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = [13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
const v11 = RegExp("symbol");
// v11 = .object()
for (let v15 = 0; v15 < 6; v15++) {
    let v18 = 0;
    do {
        for (let v22 = 0; v22 < 0; v22++) {
        }
        const v23 = v18 + 1;
        // v23 = .primitive
        v18 = v23;
    } while (v18 < 6);
}
v6[0] = v9;
const v27 = [1337,1337,1337,1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v28 = v11 - 1;
// v28 = .primitive
}
%NeverOptimizeFunction(main);
main();
