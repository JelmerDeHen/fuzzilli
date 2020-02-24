function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v3 = 13.37;
for (let v8 = 0; v8 < 100; v8++) {
    let v10 = undefined;
    let v11 = v2;
    v11[1024] = v3;
    let v14 = 0;
    for (const v15 in "boolean") {
        for (const v17 in v11) {
        }
    }
    const v18 = v14 + 1;
    // v18 = .primitive
    v14 = v18;
}
let v21 = 0;
let v24 = 0;
const v25 = v24 + 1;
// v25 = .primitive
v24 = v25;
const v26 = v21 + 1;
// v26 = .primitive
v21 = v26;
}
%NeverOptimizeFunction(main);
main();
