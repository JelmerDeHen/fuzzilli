function main() {
const v8 = !"undefined";
// v8 = .boolean
const v21 = [1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v22 = {b:13.37,d:1607264097,e:1607264097,constructor:v21,valueOf:WeakSet};
// v22 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "e", "d", "b", "constructor"])
with ("object") {
    const v39 = {get:Object};
    // v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    let v41 = 1;
    const v42 = WeakSet < 1337;
    // v42 = .boolean
    v41 = v41;
    const v43 = Object.defineProperty(v22,"e",v39);
    // v43 = .undefined
    let v46 = 0;
    const v47 = v46 + 1;
    // v47 = .primitive
    v46 = v47;
}
}
%NeverOptimizeFunction(main);
main();
