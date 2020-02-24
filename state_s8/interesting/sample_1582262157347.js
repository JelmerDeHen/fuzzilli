function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v7 = v6;
const v10 = {constructor:"boolean",length:9007199254740993};
// v10 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
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
