function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v7 = v6;
const v10 = {constructor:"boolean",length:9007199254740993};
// v10 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
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
