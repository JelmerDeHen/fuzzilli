function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [10,DataView,"symbol"];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {toString:v4,e:"symbol",a:13.37,d:DataView,constructor:v5,valueOf:v4};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "d", "e", "__proto__", "toString", "constructor"])
const v7 = {length:v6,a:"symbol"};
// v7 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__"])
let v10 = v7;
const v14 = {length:"N0Xx92zvHQ"};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v15 = {constructor:13.37,length:13.37,__proto__:v14,toString:Number,a:13.37};
// v15 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "a"], withMethods: ["toString"])
try {
    const v16 = RegExp.apply(v15,v10);
    // v16 = .unknown
} catch(v17) {
}
}
%NeverOptimizeFunction(main);
main();
