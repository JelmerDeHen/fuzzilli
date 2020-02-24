function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v7 = v6;
const v10 = {constructor:"boolean",length:9007199254740993};
// v10 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
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
