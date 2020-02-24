function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = v3[1024];
// v4 = .unknown
let v7 = 0;
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v13 = v7 + 1;
// v13 = .primitive
v7 = v13;
for (const v15 in "object") {
    let v22 = 0;
    let v25 = 0;
    let v28 = 0;
    const v29 = v28 + 1;
    // v29 = .primitive
    v28 = v29;
    let v32 = 0;
    const v36 = v25 + 1;
    // v36 = .primitive
    v25 = v36;
    const v37 = v22 + 1;
    // v37 = .primitive
    v22 = v37;
    let v41 = 0;
    const v42 = v41 + 1;
    // v42 = .primitive
    v41 = v42;
    for (const v44 in "object") {
    }
}
let v47 = 0;
while (v47 < 8) {
    v1[1337] = 3;
    const v48 = v47 + 1;
    // v48 = .primitive
    v47 = v48;
}
}
%NeverOptimizeFunction(main);
main();
