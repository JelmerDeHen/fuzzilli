function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v4 = v3;
v3[3763427031] = 129;
const v8 = {length:"object"};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v9 = {constructor:13.37,length:13.37,__proto__:v8,toString:Number,a:"object"};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "length", "a", "__proto__"], withMethods: ["toString"])
try {
    const v10 = RegExp.apply(v9,v4);
    // v10 = .unknown
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();
