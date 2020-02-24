function main() {
try {
} catch(v1) {
    const v2 = v1 > v1;
    // v2 = .boolean
}
const v5 = [13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [2845621877,2845621877,2845621877];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = [2845621877];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = {e:Int16Array,c:2845621877,valueOf:v7};
// v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "c", "valueOf"])
const v10 = {c:Int16Array,__proto__:v8,length:Int16Array};
// v10 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "length"])
let v12 = 0;
let v16 = 0;
function v17(v18,v19) {
    const v22 = [1337];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v23(v24,v25) {
        let v28 = 0;
        Array.prototype = 1337;
        do {
            if (v19) {
            } else {
                const v31 = v17(v16,v22);
                // v31 = .unknown
            }
            const v32 = v28 + 1;
            // v32 = .primitive
            v28 = v32;
        } while (v28 < 9);
        return v24;
    }
    const v33 = v23();
    // v33 = .unknown
    for (const v34 in "boolean") {
        let v37 = 0;
        do {
            const v38 = v37 + 1;
            // v38 = .primitive
            v37 = v38;
            v18.valueOf = v18;
        } while (v37 < 7);
    }
    return v18;
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v41 = v40;
const v42 = v17(v12,0);
// v42 = .unknown
const v43 = [1337,1337,"8zPbosN*N8"];
// v43 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v44 = v17(0,v8);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
