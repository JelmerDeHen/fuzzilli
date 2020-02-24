function main() {
const v4 = [0.0,0.0];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [Int32Array,1337,1337,-4080293840];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {__proto__:1337,c:1337,d:v4,a:v7,valueOf:0.0,length:v4};
// v8 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "c", "d", "a"])
const v9 = {toString:v6};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
let v10 = v7;
for (const v13 in "undefined") {
    let v15 = 0;
    function v16(v17,v18) {
        return v18;
    }
    try {
        const v19 = v15 in "undefined";
        // v19 = .boolean
    } catch(v20) {
    }
    const v21 = !0;
    // v21 = .boolean
    try {
        const v22 = Promise(...v21,...v16);
        // v22 = .unknown
    } catch(v23) {
        const v24 = [v21,v23,v4];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        with (v23) {
            const v26 = v16 - v8;
            // v26 = .number
        }
        for (const v27 of v7) {
            const v28 = v27 + 1;
            // v28 = .primitive
        }
    }
}
}
%NeverOptimizeFunction(main);
main();
