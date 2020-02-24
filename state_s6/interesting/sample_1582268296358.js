function main() {
let v2 = 0;
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v5 = v4;
let v7 = undefined;
let v11 = 0;
try {
    const v16 = eval(1337);
    // v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    const v17 = RegExp.apply(v16,Infinity);
    // v17 = .unknown
} catch(v18) {
}
const v19 = v11 + 1;
// v19 = .primitive
v11 = v19;
}
%NeverOptimizeFunction(main);
main();
