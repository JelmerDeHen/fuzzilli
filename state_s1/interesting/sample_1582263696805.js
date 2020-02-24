function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {constructor:-4294967295,__proto__:v3,toString:v3,d:-4294967295,length:v3,a:-4294967295};
// v4 = .object(ofGroup: Object, withProperties: ["a", "d", "toString", "constructor", "length", "__proto__"])
function v5(v6,v7) {
    let v10 = 0;
    const v11 = v10 + 1;
    // v11 = .primitive
    v10 = v11;
    const v15 = [13.37,13.37,13.37,13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v17 = [1337,v15,13.37,1024];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    for (const v19 in "object") {
        const v20 = v17.slice();
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v22 = Symbol.toStringTag;
        // v22 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        v17[v22] = 0;
        for (let v26 = 0; v26 < 5; v26++) {
            let v29 = 0;
            do {
                const v30 = v29 + 1;
                // v30 = .primitive
                v29 = v30;
            } while (v29 < 6);
        }
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v33 = v32;
const v34 = v5(v33);
// v34 = .unknown
const v35 = v5(Promise,v4);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
