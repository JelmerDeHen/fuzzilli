function main() {
const v2 = Symbol.toStringTag;
// v2 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v3 = Symbol[v2];
// v3 = .unknown
const v4 = {getPrototypeOf:v3,get:v3};
// v4 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "getPrototypeOf"])
const v6 = new Proxy(Reflect,v4);
// v6 = .unknown
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
