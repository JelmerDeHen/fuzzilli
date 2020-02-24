function main() {
const v2 = {e:String,b:String,length:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["b", "e"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v6(v7,v8) {
    let v12 = 0;
    let v15 = 0;
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
    for (const v19 in "boolean") {
        const v21 = [1337,1337];
        // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v22 = (1337).constructor;
        // v22 = .unknown
        const v23 = {set:v22,get:v22};
        // v23 = .object(ofGroup: Object, withProperties: ["set", "get", "__proto__"])
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
