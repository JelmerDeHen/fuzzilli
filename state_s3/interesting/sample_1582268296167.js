function main() {
let v2 = 0;
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v5 = v4;
let v7 = undefined;
let v11 = 0;
try {
    const v16 = eval(1337);
    // v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
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
