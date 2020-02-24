function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v5 = v4;
v4[1515786200] = 129;
const v6 = 1337 > 13.37;
// v6 = .boolean
const v10 = {length:"N0Xx92zvHQ"};
// v10 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v11 = {constructor:13.37,length:13.37,__proto__:v10,toString:Number,a:"N0Xx92zvHQ"};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "a"], withMethods: ["toString"])
try {
    const v12 = RegExp.apply(v11,v5);
    // v12 = .unknown
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();
