function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [10,DataView,"symbol"];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {toString:v4,e:"symbol",a:13.37,d:DataView,constructor:v5,valueOf:v4};
// v6 = .object(ofGroup: Object, withProperties: ["e", "d", "toString", "valueOf", "constructor", "a", "__proto__"])
const v7 = {length:v6,a:"symbol"};
// v7 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length"])
let v10 = v7;
const v14 = {length:"N0Xx92zvHQ"};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v15 = {constructor:13.37,length:13.37,__proto__:v14,toString:Number,a:13.37};
// v15 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
try {
    const v16 = RegExp.apply(v15,v10);
    // v16 = .unknown
} catch(v17) {
}
}
%NeverOptimizeFunction(main);
main();
