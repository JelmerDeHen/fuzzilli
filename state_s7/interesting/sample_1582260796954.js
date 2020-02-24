function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            let v14 = 0;
            do {
                const v15 = v10 + 1;
                // v15 = .primitive
                v10 = v15;
            } while (v10 < 7);
            const v16 = v7 + 1;
            // v16 = .primitive
            v7 = v16;
        } while (v7 < 8);
        const v19 = [13.37,13.37,13.37,13.37,13.37];
        // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v21 = [1337];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v22 = [v19,v21,Uint16Array];
        // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v23 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
        // v23 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "e", "toString", "d"])
        const v24 = v23.b;
        // v24 = .unknown
        let v25 = v22;
        try {
            const v26 = v25.every(v24,v24);
            // v26 = .boolean
        } catch(v27) {
        }
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v30 = v29;
const v31 = v0(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
