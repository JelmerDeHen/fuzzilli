function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {length:isFinite};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v7 = [1337,v4,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v8(v9,v10) {
    let v14 = 0;
    const v15 = v14 + 1;
    // v15 = .primitive
    v14 = v15;
    const v17 = {get:Array};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v19 = Object.defineProperty(this,9007199254740992,v17);
    // v19 = .undefined
    let v20 = this;
    let v21 = v20;
    const v24 = new Proxy(v21,Object);
    // v24 = .unknown
    v21.c = v2;
    const v25 = Object.freeze(v24);
    // v25 = .undefined
}
const v26 = v7.forEach(v8,"eeeRbEqfAO");
// v26 = .undefined
}
%NeverOptimizeFunction(main);
main();
