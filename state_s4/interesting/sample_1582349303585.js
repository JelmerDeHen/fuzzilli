function main() {
const v1 = {length:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
