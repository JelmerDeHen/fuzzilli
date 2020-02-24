function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = {b:v5,c:Math,e:"toPrimitive",constructor:Math,__proto__:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "c", "e", "b"])
const v8 = {c:v6,constructor:Math,valueOf:v7,b:1337,e:v3,a:13.37,length:v3};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "length", "e", "constructor", "valueOf", "c", "a"])
function v9(v10,v11) {
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            try {
                const v17 = !v11;
                // v17 = .boolean
                const v21 = [13.37,13.37,-4294967297,13.37];
                // v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                const v22 = {length:v21,d:Uint8Array};
                // v22 = .object(ofGroup: Object, withProperties: ["length", "d", "__proto__"])
                function v23(v24,v25) {
                    for (const v26 in v22) {
                        let v29 = 0;
                        delete (13.37)[8];
                        const v30 = v8 << 8;
                        // v30 = .integer
                        do {
                            let v33 = 0;
                            while (v33 < 9) {
                                const v34 = v33 % 9;
                                // v34 = .number
                                const v35 = v34 + 1;
                                // v35 = .primitive
                                v33 = v35;
                            }
                            const v36 = v29 + 1;
                            // v36 = .primitive
                            v29 = v36;
                        } while (v29 < 8);
                    }
                }
                let v37 = v10;
                const v38 = v23(v37);
                // v38 = .unknown
                const v39 = v23(v21,v38);
                // v39 = .unknown
            } catch(v40) {
            }
            const v41 = v16 + 1;
            // v41 = .primitive
            v16 = v41;
        } while (v16 < 8);
    }
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v44 = v43;
const v45 = v9(v44);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
