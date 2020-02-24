function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [10,DataView,"symbol"];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {toString:v4,e:"symbol",a:13.37,d:DataView,constructor:v5,valueOf:v4};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "e", "valueOf", "a", "d", "toString"])
const v7 = {length:v6,a:"symbol"};
// v7 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length"])
let v10 = v7;
const v14 = {length:"N0Xx92zvHQ"};
// v14 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v15 = {constructor:13.37,length:13.37,__proto__:v14,toString:Number,a:13.37};
// v15 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "constructor"], withMethods: ["toString"])
try {
    const v16 = RegExp.apply(v15,v10);
    // v16 = .unknown
} catch(v17) {
}
}
%NeverOptimizeFunction(main);
main();
