function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = {a:1337,toString:13.37,c:v4,__proto__:v6,valueOf:"a",constructor:v4};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "c", "a", "constructor", "valueOf"])
const v8 = {toString:v4,valueOf:v7,d:1337,constructor:-9007199254740992};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "__proto__", "toString", "constructor"])
function v9(v10,v11) {
    const v15 = [13.37,13.37,13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v16 = [v15,-1970853828,DataView];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v20 = 0;
    do {
        const v22 = Symbol.unscopables;
        // v22 = .unknown
        v8[v22] = Symbol;
        const v23 = v20 + 1;
        // v23 = .primitive
        v20 = v23;
    } while (v20 < 10);
    for (const v24 in v16) {
        v15.__proto__ = v10;
    }
    for (const v26 in "boolean") {
        let v29 = 0;
        let v31 = 0;
        const v32 = v29 + 1;
        // v32 = .primitive
        const v33 = Object();
        // v33 = .object()
        v8[2722785800] = v4;
        let v34 = Object;
        const v35 = v6[4294967296];
        // v35 = .unknown
        v34 = v26;
        const v36 = 0 < 13.37;
        // v36 = .boolean
        let v40 = 0;
        let v43 = 0;
    }
}
const v44 = [v4];
// v44 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v45 = v44;
const v46 = v9(v45);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
