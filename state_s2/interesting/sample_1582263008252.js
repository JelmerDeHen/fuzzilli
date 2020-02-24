function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {a:1351830868,d:v4,toString:"0uJlcnwv*J",valueOf:1351830868,b:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "a", "d", "__proto__", "toString"])
for (let v9 = 0; v9 < 100; v9++) {
    function v10(v11,v12) {
        const v14 = {get:v10};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
        const v16 = Object.defineProperty(v5,"d",v14);
        // v16 = .undefined
    }
    const v18 = [1337];
    // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v19 = v18;
    const v20 = v10(v19);
    // v20 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
