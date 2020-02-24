function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v7 = v6;
const v10 = {constructor:"boolean",length:9007199254740993};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
v6.toString = Boolean;
try {
    const v12 = Function(v7,v10);
    // v12 = .unknown
} catch(v13) {
}
let v16 = 0;
}
%NeverOptimizeFunction(main);
main();
