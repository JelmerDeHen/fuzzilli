function main() {
const v1 = {length:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v5(v6,v7) {
    let v8 = v5;
    const v11 = new Proxy(v8,Object);
    // v11 = .unknown
    let v12 = Object;
    try {
        const v13 = v12.assign(v8,v11);
        // v13 = .undefined
    } catch(v14) {
    }
}
const v15 = v4.forEach(v5,"eeeRbEqfAO");
// v15 = .undefined
}
%NeverOptimizeFunction(main);
main();
