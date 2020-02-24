function main() {
const v7 = [1337,13.37,gc,gc];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
try {
    const v14 = String.fromCharCode(13.37,1360750684);
    // v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    const v15 = eval(v14);
    // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
} catch(v16) {
    const v17 = {constructor:v16,__proto__:v16,...v7,...v16,..."symbol"};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["codePointAt", "slice", "splice", "trim", "reduce", "charAt", "toString", "entries", "find", "forEach", "findIndex", "substring", "reverse", "filter", "sort", "flatMap", "concat", "every", "copyWithin", "values", "replace", "padStart", "push", "split", "repeat", "startsWith", "pop", "some", "unshift", "endsWith", "padEnd", "lastIndexOf", "flat", "fill", "keys", "shift", "indexOf", "join", "map", "toLocaleString", "charCodeAt", "includes", "reduceRight"])
}
}
%NeverOptimizeFunction(main);
main();
