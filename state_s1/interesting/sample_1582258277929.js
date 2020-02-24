function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v19 = v8 + 1;
// v19 = .primitive
v8 = v19;
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
let v31 = 0;
const v32 = v31 + 1;
// v32 = .primitive
v31 = v32;
const v36 = "object".constructor;
// v36 = .function()
const v39 = 1337 == 13.37;
// v39 = .boolean
const v41 = Object();
// v41 = .object()
const v43 = Object(13.37,1337);
// v43 = .object()
let v46 = 0;
const v47 = v46 + 1;
// v47 = .primitive
v46 = v47;
let v50 = 0;
const v51 = v50 + 1;
// v51 = .primitive
v50 = v51;
const v52 = v36(v43);
// v52 = .unknown
let v55 = 0;
const v56 = v55 + 1;
// v56 = .primitive
v55 = v56;
}
%NeverOptimizeFunction(main);
main();
