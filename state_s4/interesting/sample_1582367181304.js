function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5) {
    let v8 = this;
    let v9 = v8;
    let v10 = this;
    let v14 = v10;
    v9.length = 8;
    const v18 = new Proxy(v14,Object);
    // v18 = .unknown
    const v19 = Object.freeze(v18);
    // v19 = .undefined
    try {
        const v20 = v9.pop();
        // v20 = .unknown
        let v23 = 0;
    } catch(v24) {
    }
    return v10;
}
const v25 = v1.some(v3,v2);
// v25 = .boolean
}
%NeverOptimizeFunction(main);
main();
