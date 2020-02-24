function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [10,DataView,"symbol"];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {toString:v4,e:"symbol",a:13.37,d:DataView,constructor:v5,valueOf:v4};
// v6 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "d", "__proto__", "constructor", "e", "toString"])
const v7 = {length:v6,a:"symbol"};
// v7 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a"])
let v10 = v7;
const v14 = {length:"N0Xx92zvHQ"};
// v14 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v15 = {constructor:13.37,length:13.37,__proto__:v14,toString:Number,a:13.37};
// v15 = .object(ofGroup: Object, withProperties: ["constructor", "length", "a", "__proto__"], withMethods: ["toString"])
try {
    const v16 = RegExp.apply(v15,v10);
    // v16 = .unknown
} catch(v17) {
}
}
%NeverOptimizeFunction(main);
main();
