function main() {
function v2(v3,v4) {
    for (const v9 in "boolean") {
        const v10 = [];
        // v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v14 = {length:"N0Xx92zvHQ"};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
        const v15 = {constructor:13.37,length:13.37,__proto__:v14,toString:Number,a:"N0Xx92zvHQ"};
        // v15 = .object(ofGroup: Object, withProperties: ["a", "length", "constructor", "__proto__"], withMethods: ["toString"])
        const v17 = [1337,1337];
        // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v21 = [13.37,13.37];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v22 = [13.37,v21];
        // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v23 = gc();
        // v23 = .undefined
        const v24 = gc(...v17,...v22);
        // v24 = .undefined
        const v25 = v10.__proto__;
        // v25 = .object()
        let v28 = 0;
        do {
            for (const v30 of "pvU0UUjoya") {
            }
            const v31 = v28 + 1;
            // v31 = .primitive
            v28 = v31;
        } while (v28 < 8);
    }
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v35 = v34;
const v36 = v2(v35);
// v36 = .unknown
const v37 = v2(1024,4.0);
// v37 = .unknown
const v38 = v2(v2,1337);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
