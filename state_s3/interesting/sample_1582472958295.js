function main() {
const v7 = [1337,13.37,gc,gc];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
try {
    const v14 = String.fromCharCode(13.37,1360750684);
    // v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    const v15 = eval(v14);
    // v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
} catch(v16) {
    const v17 = {constructor:v16,__proto__:v16,...v7,...v16,..."symbol"};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"], withMethods: ["forEach", "unshift", "push", "join", "every", "padStart", "endsWith", "lastIndexOf", "fill", "substring", "codePointAt", "padEnd", "flat", "charAt", "indexOf", "flatMap", "map", "toString", "concat", "reverse", "trim", "slice", "replace", "includes", "startsWith", "reduce", "splice", "pop", "charCodeAt", "repeat", "find", "sort", "keys", "some", "copyWithin", "entries", "findIndex", "reduceRight", "values", "split", "toLocaleString", "shift", "filter"])
}
}
%NeverOptimizeFunction(main);
main();
