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
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
