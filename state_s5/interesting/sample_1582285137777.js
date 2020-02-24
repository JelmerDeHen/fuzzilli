function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
        // v17 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    } catch(v18) {
    }
}
}
%NeverOptimizeFunction(main);
main();
