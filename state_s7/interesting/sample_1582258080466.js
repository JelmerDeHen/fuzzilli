function main() {
function v1(v2,v3) {
    for (const v6 in "boolean") {
        const v8 = [Boolean];
        // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v10 = {valueOf:1337,c:10};
        // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c"])
        function v11(v12,v13) {
            const v18 = [13.37];
            // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v21 = Object.seal(Array);
            // v21 = .object()
            const v23 = [1337];
            // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v24 = {d:v18,e:-256,c:13.37};
            // v24 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "c", "e"])
            const v25 = {e:v23,length:v24,a:13.37,d:Boolean,toString:"unscopable",__proto__:v18};
            // v25 = .object(ofGroup: Object, withProperties: ["toString", "e", "__proto__", "a", "length"], withMethods: ["d"])
            const v27 = Symbol.toStringTag;
            // v27 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
            Array[v27] = v25;
        }
        const v28 = v11(v10);
        // v28 = .unknown
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v32 = v31;
const v33 = v1(v32);
// v33 = .unknown
const v34 = v1(1024,4.0);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
