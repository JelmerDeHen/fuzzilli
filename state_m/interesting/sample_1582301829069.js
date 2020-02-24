function main() {
const v1 = {length:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v5(v6,v7) {
    let v9 = this;
    const v14 = {get:v5,set:isFinite};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
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
