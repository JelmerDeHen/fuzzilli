function main() {
const v1 = {length:isFinite};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v4 = [1337,v1,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
