function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = ["MAX_VALUE",v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {b:"MAX_VALUE",length:v4,c:v5};
// v6 = .object(ofGroup: Object, withProperties: ["length", "b", "c", "__proto__"])
let v7 = v6;
for (const v9 in "undefined") {
    let v12 = 0;
    do {
        let v15 = 0;
        const v16 = v15 + 1;
        // v16 = .primitive
        v15 = v16;
        const v18 = [13.37,13.37];
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        function v19(v20,v21,v22) {
            'use strict'
            v7.valueOf = v22;
            v18[0] = v15;
        }
        const v23 = v19();
        // v23 = .unknown
        const v24 = v12 + 1;
        // v24 = .primitive
        v12 = v24;
    } while (v12 < 8);
}
}
%NeverOptimizeFunction(main);
main();
