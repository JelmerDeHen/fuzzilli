function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v6 = v5;
let v8 = undefined;
let v16 = 0;
let v19 = 0;
let v22 = 0;
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
let v30 = 0;
try {
} catch(v33) {
    let v36 = 0;
    const v39 = Int16Array(19873);
    // v39 = .unknown
}
const v40 = v19 + 1;
// v40 = .primitive
v19 = v40;
const v41 = v16 + 1;
// v41 = .primitive
v16 = v41;
v8 = 13.37;
let v45 = 0;
while (v45 < 3) {
    const v46 = v1.unshift(v8,1337);
    // v46 = .integer
    const v47 = v45 + 1;
    // v47 = .primitive
    v45 = v47;
}
}
%NeverOptimizeFunction(main);
main();
