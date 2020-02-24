function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {length:"unscopable"};
// v6 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v7 = {constructor:13.37,length:13.37,__proto__:v6,toString:Number,a:"unscopable"};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "a"], withMethods: ["toString"])
let v10 = 0;
while (v10 < 9) {
    const v12 = {get:Number};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v14 = Object.create(v7,-4294967295,v12);
    // v14 = .object()
    const v15 = v10 + 1;
    // v15 = .primitive
    v10 = v15;
}
}
%NeverOptimizeFunction(main);
main();
