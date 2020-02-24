function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v7 = v6;
v7["symbol"] = 1337;
const v12 = {constructor:"sZO5vNgWS7",length:9007199254740993};
// v12 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
let v21 = 0;
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
const v29 = Symbol.toStringTag;
// v29 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v5[v29] = gc;
}
%NeverOptimizeFunction(main);
main();
