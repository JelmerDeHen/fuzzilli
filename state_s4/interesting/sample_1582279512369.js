function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v4(v5,v6) {
    const v8 = [13.37,13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v10 = [1337,1337,1337,1337];
    // v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v11 = [v8,v10];
    // v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v13 = new WeakSet(v11);
    // v13 = .object(ofGroup: WeakSet, withProperties: ["__proto__"], withMethods: ["has", "add", "delete"])
    const v14 = v8.__proto__;
    // v14 = .object()
    const v15 = {__proto__:v13,b:v14,...v1,...v10,...1337,...v3};
    // v15 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__", "length"], withMethods: ["includes", "some", "unshift", "filter", "sort", "keys", "findIndex", "reverse", "toLocaleString", "pop", "join", "concat", "map", "shift", "entries", "toString", "forEach", "splice", "lastIndexOf", "reduceRight", "copyWithin", "reduce", "values", "flat", "push", "fill", "indexOf", "flatMap", "find", "every", "slice"])
    let v19 = 0;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v23 = v22;
const v24 = v4(v23);
// v24 = .unknown
const v25 = v4();
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
