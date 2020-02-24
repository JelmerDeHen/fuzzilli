function main() {
function v1(v2,v3) {
    for (const v6 in "boolean") {
        const v8 = [Boolean];
        // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v10 = {valueOf:1337,c:10};
        // v10 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "c"])
        function v11(v12,v13) {
            const v18 = [13.37];
            // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v21 = Object.seal(Array);
            // v21 = .object()
            const v23 = [1337];
            // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
            const v24 = {d:v18,e:-256,c:13.37};
            // v24 = .object(ofGroup: Object, withProperties: ["e", "c", "d", "__proto__"])
            const v25 = {e:v23,length:v24,a:13.37,d:Boolean,toString:"unscopable",__proto__:v18};
            // v25 = .object(ofGroup: Object, withProperties: ["length", "e", "toString", "__proto__", "a"], withMethods: ["d"])
            const v27 = Symbol.toStringTag;
            // v27 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            Array[v27] = v25;
        }
        const v28 = v11(v10);
        // v28 = .unknown
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v32 = v31;
const v33 = v1(v32);
// v33 = .unknown
const v34 = v1(1024,4.0);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
