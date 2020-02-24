function main() {
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {valueOf:v3,length:13.37,d:127,e:127};
// v4 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "d", "__proto__", "e"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v7 = v6;
let v9 = undefined;
let v17 = 0;
let v20 = 0;
do {
    const v21 = v3.findIndex(Array,v4);
    // v21 = .integer
    const v22 = "boolean".repeat(v7);
    // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    const v23 = v22.slice(v20,v21);
    // v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    let v26 = 0;
    const v27 = v26 + 1;
    // v27 = .primitive
    v26 = v27;
    let v30 = 0;
    const v31 = v20 + 1;
    // v31 = .primitive
    v20 = v31;
} while (v20 < 8);
const v32 = v17 + 1;
// v32 = .primitive
v17 = v32;
}
%NeverOptimizeFunction(main);
main();
