function main() {
const v8 = !"undefined";
// v8 = .boolean
const v21 = [1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v22 = {b:13.37,d:1607264097,e:1607264097,constructor:v21,valueOf:WeakSet};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "constructor", "e", "d", "b"])
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
