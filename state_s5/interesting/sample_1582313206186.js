function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = ["N*d4*m/H0F","N*d4*m/H0F",v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {valueOf:v6,b:-1662380622,c:v4,a:v4,__proto__:1337,constructor:v7};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "c", "b", "a", "__proto__"])
const v10 = [13.37,13.37,v8,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
for (const v11 of v10) {
    function v12(v13,v14) {
        let v18 = v13;
        let v19 = v11;
        while (v19 === v18) {
            const v20 = v19 & -1.7976931348623157e+308;
            // v20 = .integer
            const v21 = !v20;
            // v21 = .boolean
            v19 = v21;
        }
        for (let v22 = 6; v22 < 512; v22++) {
        }
    }
    const v23 = v12(13.37);
    // v23 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
