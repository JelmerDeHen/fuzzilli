function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [v6,13.37,ArrayBuffer,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {constructor:ArrayBuffer,c:v7,toString:1337,e:13.37,valueOf:v6};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "toString", "c", "e", "__proto__"])
const v9 = {__proto__:ArrayBuffer};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = 1337;
const v13 = [13.37,13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v16 = [];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v17 = new Set(v13);
// v17 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["has", "clear", "values", "delete", "add", "keys", "entries", "forEach"])
let v20 = 0;
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
const v25 = (1337)[v15];
// v25 = .unknown
let v28 = -4096;
do {
    const v29 = v28 + 1;
    // v29 = .primitive
    function v30(v31,v32) {
        const v33 = v17.add(v29);
        // v33 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["has", "clear", "values", "delete", "add", "keys", "entries", "forEach"])
        for (const v39 in "boolean") {
            let v42 = 0;
            do {
                const v43 = v42 + 1;
                // v43 = .primitive
                v42 = v43;
            } while (v42 < 8);
        }
    }
    let v44 = v29;
    const v45 = v30(v44);
    // v45 = .unknown
    v28 = v29;
} while (v28 < 7);
}
%NeverOptimizeFunction(main);
main();
