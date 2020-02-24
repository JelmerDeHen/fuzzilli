function main() {
const v2 = Symbol.toStringTag;
// v2 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v3 = Symbol[v2];
// v3 = .unknown
const v4 = {getPrototypeOf:v3,get:v3};
// v4 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "get", "__proto__"])
const v6 = new Proxy(Reflect,v4);
// v6 = .unknown
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v9 = v8;
let v11 = undefined;
for (const v13 in "boolean") {
    Object[1337] = Reflect;
    for (let v18 = 0; v18 < 100; v18++) {
    }
    Object.__proto__ = v6;
}
}
%NeverOptimizeFunction(main);
main();
