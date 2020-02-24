function main() {
const v1 = "object".constructor;
// v1 = .function()
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
for (const v6 in "object") {
    const v7 = ~v5;
    // v7 = .boolean
}
let v10 = 0;
do {
    const v11 = Object(v1);
    // v11 = .object()
    const v12 = [];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v13 = {};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v16 = 0;
    while (v16 < 2) {
        v12.__proto__ = v13;
        const v17 = v16 + 1;
        // v17 = .primitive
        v16 = v17;
    }
    let v19 = 0;
    const v20 = v10 + 1;
    // v20 = .primitive
    v10 = v20;
} while (v10 < 8);
for (let v24 = 0; v24 < 7; v24++) {
}
const v26 = [13.37,13.37];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v27 = v26[1024];
// v27 = .unknown
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
v30 = v31;
}
%NeverOptimizeFunction(main);
main();
