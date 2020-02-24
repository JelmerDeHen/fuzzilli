function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = {length:parseFloat,e:v2};
// v3 = .object(ofGroup: Object, withProperties: ["e", "__proto__"], withMethods: ["length"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            const v13 = [];
            // v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            let v14 = "function";
            let v18 = 0;
            while (v18 < 3) {
                const v19 = v3.__proto__;
                // v19 = .object()
                const v20 = v18 + 1;
                // v20 = .primitive
                v18 = v20;
            }
            let v21 = 2947655073;
            const v22 = v21 % v8;
            // v22 = .number
            v13[v22] = v14;
            const v23 = v11 + 1;
            // v23 = .primitive
            v11 = v23;
        } while (v11 < 8);
    }
}
const v24 = [v4];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v25 = v24;
const v26 = v4(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
