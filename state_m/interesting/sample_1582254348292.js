function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {d:gc,valueOf:v5};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["d"])
const v9 = {get:gc,set:gc};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v11 = Object.defineProperty(v6,127,v9);
// v11 = .undefined
const v12 = typeof v3;
// v12 = .string
const v14 = v12 === "number";
// v14 = .boolean
const v15 = "object".padEnd(1024,v11);
// v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v16 = v15 | 1337;
// v16 = .integer
}
%NeverOptimizeFunction(main);
main();
