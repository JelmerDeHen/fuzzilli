function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v5 = v4;
v4[1515786200] = 129;
const v6 = 1337 > 13.37;
// v6 = .boolean
const v10 = {length:"N0Xx92zvHQ"};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v11 = {constructor:13.37,length:13.37,__proto__:v10,toString:Number,a:"N0Xx92zvHQ"};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__", "a"], withMethods: ["toString"])
try {
    const v12 = RegExp.apply(v11,v5);
    // v12 = .unknown
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();
