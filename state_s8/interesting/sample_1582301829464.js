function main() {
const v1 = {length:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v5(v6,v7) {
    let v9 = this;
    const v14 = {get:v5,set:isFinite};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v16 = Object.defineProperty(this,89817086,v14);
    // v16 = .undefined
    let v17 = v9;
    const v20 = new Proxy(v17,Object);
    // v20 = .unknown
    const v21 = Object.freeze(v20);
    // v21 = .undefined
}
const v22 = v4.forEach(v5,"eeeRbEqfAO");
// v22 = .undefined
}
%NeverOptimizeFunction(main);
main();
