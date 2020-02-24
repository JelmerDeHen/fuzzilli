function main() {
let v2 = 0;
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v5 = v4;
let v7 = undefined;
let v11 = 0;
try {
    const v16 = eval(1337);
    // v16 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
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
