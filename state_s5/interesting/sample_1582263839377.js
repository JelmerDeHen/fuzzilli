function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v2 = undefined;
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v5 = v4;
let v7 = 0;
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v10 = Symbol.toPrimitive;
// v10 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v8[v10] = v7;
const v14 = {get:undefined};
// v14 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v16 = Object.defineProperty(v0,9007199254740992,v14);
// v16 = .undefined
}
%NeverOptimizeFunction(main);
main();
