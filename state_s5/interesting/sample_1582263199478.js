function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {length:"unscopable"};
// v6 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v7 = {constructor:13.37,length:13.37,__proto__:v6,toString:Number,a:"unscopable"};
// v7 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
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
