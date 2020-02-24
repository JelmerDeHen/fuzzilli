function main() {
const v2 = {constructor:"symbol",length:9007199254740993};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v6 = [13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [13.37,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v10 = -65537;
do {
    const v11 = Object("symbol",v7);
    // v11 = .object()
    const v12 = v10 + 1;
    // v12 = .primitive
    v10 = v12;
} while (v10 < 7);
const v30 = {};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v36 = [];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v42 = "object".constructor;
// v42 = .function()
const v44 = v42(v36,v30,"symbol",Reflect);
// v44 = .unknown
const v56 = 1337 & 13.37;
// v56 = .integer
let v60 = 0;
const v61 = v60 + 1;
// v61 = .primitive
v60 = v61;
}
%NeverOptimizeFunction(main);
main();
