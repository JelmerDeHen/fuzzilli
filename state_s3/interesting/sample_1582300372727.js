function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {length:isFinite};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v6 = [1337,v3,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v7(v8,v9) {
    let v11 = this;
    let v12 = v11;
    const v15 = new Proxy(v12,Object);
    // v15 = .unknown
    v12.c = v1;
    const v16 = Object.freeze(v15);
    // v16 = .undefined
}
const v17 = v6.forEach(v7,"eeeRbEqfAO");
// v17 = .undefined
}
%NeverOptimizeFunction(main);
main();
