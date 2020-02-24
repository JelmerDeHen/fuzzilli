function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = ["c",1337,3488870410];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {constructor:Uint32Array,c:v6};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "c"])
function v8(v9,v10) {
    let v13 = 0;
    do {
        let v16 = 0;
        do {
            const v17 = v16 + 1;
            // v17 = .primitive
            for (let v20 = 0; v20 < v16; v20++) {
                const v22 = Symbol.replace;
                // v22 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
                const v23 = v4[v22];
                // v23 = .unknown
                const v24 = v22.__proto__;
                // v24 = .object()
            }
            v16 = v17;
        } while (v16 < 7);
        for (const v25 in v7) {
        }
        const v26 = (0)[0];
        // v26 = .unknown
        const v27 = v13 + 1;
        // v27 = .primitive
        v13 = v27;
    } while (v13 < 8);
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v30 = v29;
const v31 = v8(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
