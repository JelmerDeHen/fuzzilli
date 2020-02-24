function main() {
let v2 = 0;
let v5 = 13.37;
const v8 = [13.37,13.37,-4294967297,-4294967297];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = [v8,-9007199254740992,v8];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v12 = 0;
while (v12 < 65535) {
    const v13 = v10.push(v5);
    // v13 = .integer
    let v14 = v13;
    const v15 = v13 + 1;
    // v15 = .primitive
    v12 = v15;
    let v17 = 13.37;
    const v19 = String.fromCharCode(v14,v17);
    // v19 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    const v20 = v19 - 1;
    // v20 = .primitive
}
}
%NeverOptimizeFunction(main);
main();
