function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v5 = v4;
const v7 = {};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v8 = v7.__proto__;
// v8 = .object()
v1[-9007199254740992] = v8;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
for (const v13 in v1) {
    try {
        const v14 = typeof -2191158840;
        // v14 = .string
        const v16 = v14 === "undefined";
        // v16 = .boolean
        const v17 = v5.toLocaleString(v13,v16,1337);
        // v17 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    } catch(v18) {
    }
}
}
%NeverOptimizeFunction(main);
main();
