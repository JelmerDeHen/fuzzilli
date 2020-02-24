function main() {
const v2 = {e:String,b:String,length:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["e", "b"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8) {
    let v12 = 0;
    let v15 = 0;
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
    for (const v19 in "boolean") {
        const v21 = [1337,1337];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v22 = (1337).constructor;
        // v22 = .unknown
        const v23 = {set:v22,get:v22};
        // v23 = .object(ofGroup: Object, withProperties: ["set", "__proto__", "get"])
        const v25 = Object.freeze(v21,v19,v23);
        // v25 = .undefined
        const v27 = Object.entries(v21);
        // v27 = .object()
    }
}
const v28 = v5.forEach(v6,"eeeRbEqfAO");
// v28 = .undefined
}
%NeverOptimizeFunction(main);
main();
