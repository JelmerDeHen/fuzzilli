function main() {
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = v5;
v6 = v5;
const v11 = [13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v13 = {};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v23 = {};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v29 = [];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v35 = "object".constructor;
// v35 = .function()
const v37 = v35(v29,v23,"symbol",Reflect);
// v37 = .unknown
const v44 = {};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v45 = v44;
const v59 = {..."symbol",...v44,..."symbol",...1337,...v45};
// v59 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"], withMethods: ["endsWith", "replace", "indexOf", "substring", "includes", "split", "concat", "charCodeAt", "lastIndexOf", "codePointAt", "charAt", "padStart", "trim", "slice", "padEnd", "repeat", "startsWith"])
const v60 = v13 % 1337;
// v60 = .number
const v142 = v37 >> Object;
// v142 = .integer
let v146 = 0;
const v147 = v146 + 1;
// v147 = .primitive
v146 = v147;
}
%NeverOptimizeFunction(main);
main();
