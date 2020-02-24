function main() {
const v4 = (1337)["__proto__"];
// v4 = .unknown
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v10 = [2011007354,"__proto__"];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v11 = String;
const v13 = v11 > "boolean";
// v13 = .boolean
const v14 = Object.freeze(v4);
// v14 = .undefined
let v22 = 0;
let v29 = 0;
let v38 = 0;
let v46 = 0;
let v53 = 0;
let v62 = 0;
}
%NeverOptimizeFunction(main);
main();
