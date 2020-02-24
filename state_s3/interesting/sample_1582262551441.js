function main() {
const v2 = ["valueOf",1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v5 = v4;
let v7 = undefined;
for (let v14 = 0; v14 < 100; v14++) {
}
const v15 = {length:"N0Xx92zvHQ"};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v16 = {constructor:13.37,length:13.37,__proto__:v15,toString:Number,a:"N0Xx92zvHQ"};
// v16 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "length"], withMethods: ["toString"])
for (const v17 of v2) {
    const v18 = "valueOf" in v16;
    // v18 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
