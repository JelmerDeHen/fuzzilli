function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v5 = 0;
let v7 = v1;
let v9 = undefined;
for (const v14 in "boolean") {
    let v17 = 0;
    let v20 = 0;
    const v30 = v17 + 1;
    // v30 = .primitive
    v17 = v30;
    function v31(v32,v33) {
    }
    const v34 = v31();
    // v34 = .unknown
    const v36 = [13.37,13.37,13.37];
    // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v38 = [1337,1337,1337,1337];
    // v38 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v40 = {get:v34,set:v31};
    // v40 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["set"])
    const v42 = Object.defineProperty(v38,"valueOf",v40);
    // v42 = .undefined
    for (let v46 = 0; v46 < 100; v46++) {
    }
    v38[0] = v36;
}
}
%NeverOptimizeFunction(main);
main();
