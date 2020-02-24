function main() {
const v2 = Symbol.toStringTag;
// v2 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v3 = Symbol[v2];
// v3 = .unknown
const v4 = {getPrototypeOf:v3,get:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf", "get"])
const v6 = new Proxy(Reflect,v4);
// v6 = .unknown
let v9 = 0;
function v10(v11,v12) {
    for (const v14 in "boolean") {
        let v17 = 0;
        const v18 = v17 + 1;
        // v18 = .primitive
        v17 = v18;
        for (let v23 = 0; v23 < 100; v23++) {
        }
        Object.__proto__ = v6;
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v26 = v25;
const v27 = v10(v26);
// v27 = .unknown
const v28 = v10();
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
