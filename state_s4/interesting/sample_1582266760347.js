function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
let v7 = 0;
v2 = v3;
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v10 = v9;
let v12 = undefined;
for (const v16 in "object") {
    const v17 = gc();
    // v17 = .undefined
}
let v20 = 0;
const v24 = [13.37,13.37,13.37,13.37,13.37];
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v25 = {length:"N0Xx92zvHQ"};
// v25 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
with ("N0Xx92zvHQ") {
    let v30 = 0;
    const v31 = v30 + 1;
    // v31 = .primitive
    v30 = v31;
    const v32 = search(v25,1024,1024,v24,0);
    // v32 = .unknown
}
let v34 = 0;
const v35 = v34[3];
// v35 = .unknown
const v36 = v20 + 1;
// v36 = .primitive
v20 = v36;
}
%NeverOptimizeFunction(main);
main();
