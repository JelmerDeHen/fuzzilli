function main() {
const v1 = {length:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
