function main() {
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = v5;
v6 = v5;
const v11 = [13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v13 = {};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v23 = {};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v29 = [];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v35 = "object".constructor;
// v35 = .function()
const v37 = v35(v29,v23,"symbol",Reflect);
// v37 = .unknown
const v44 = {};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v45 = v44;
const v59 = {..."symbol",...v44,..."symbol",...1337,...v45};
// v59 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"], withMethods: ["trim", "indexOf", "split", "padStart", "padEnd", "startsWith", "repeat", "substring", "replace", "includes", "charCodeAt", "lastIndexOf", "slice", "charAt", "concat", "codePointAt", "endsWith"])
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
