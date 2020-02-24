function main() {
const v1 = {length:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7) {
    let v9 = this;
    let v10 = v9;
    const v13 = new Proxy(v10,Object);
    // v13 = .unknown
    let v14 = Object;
    try {
        const v15 = v14.assign(v10,v13);
        // v15 = .undefined
    } catch(v16) {
        let v19 = 0;
    }
    let v22 = 0;
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
}
const v24 = v4.forEach(v5,"eeeRbEqfAO");
// v24 = .undefined
}
%NeverOptimizeFunction(main);
main();
