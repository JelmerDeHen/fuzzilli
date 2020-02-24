function main() {
const v1 = {length:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
