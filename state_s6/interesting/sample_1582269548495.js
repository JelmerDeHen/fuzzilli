function main() {
const v2 = Symbol.toStringTag;
// v2 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v3 = Symbol[v2];
// v3 = .unknown
const v4 = {getPrototypeOf:v3,get:v3};
// v4 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "getPrototypeOf"])
const v6 = new Proxy(Reflect,v4);
// v6 = .unknown
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
