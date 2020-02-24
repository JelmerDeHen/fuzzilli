function main() {
let v2 = 0;
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v5 = v4;
let v7 = undefined;
let v11 = 0;
try {
    const v16 = eval(1337);
    // v16 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
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
