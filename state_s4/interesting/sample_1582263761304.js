function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [13.37,13.37,13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = [];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v9 = {b:v7,c:Math,e:"toPrimitive",constructor:Math,__proto__:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "c", "constructor", "b"])
const v10 = {c:v8,constructor:Math,valueOf:v9,b:1337,e:v5,a:13.37,length:v5};
// v10 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "constructor", "length", "b", "__proto__", "c", "a"])
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            try {
                const v22 = [13.37,13.37,-4294967297,13.37];
                // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                const v23 = {length:v22,d:Uint8Array};
                // v23 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "d"])
                function v24(v25,v26) {
                    for (const v27 in v23) {
                        "boolean"[v13] = 8;
                        let v28 = v1;
                        const v29 = typeof v22;
                        // v29 = .string
                        const v31 = v29 === "object";
                        // v31 = .boolean
                        for (const v32 in v25) {
                            const v33 = {toString:"boolean",__proto__:-4294967297};
                            // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
                        }
                        let v36 = 0;
                        delete (13.37)[8];
                        const v37 = v10 << 8;
                        // v37 = .integer
                        do {
                            let v40 = 0;
                            const v41 = v40 % 9;
                            // v41 = .number
                            const v42 = v41 + 1;
                            // v42 = .primitive
                            v40 = v42;
                            const v43 = v36 + 1;
                            // v43 = .primitive
                            v36 = v43;
                            const v44 = Uint8Array + 9;
                            // v44 = .primitive
                        } while (v36 < 8);
                    }
                }
                let v45 = v12;
                const v46 = v24(v45);
                // v46 = .unknown
                const v47 = v24(v22,v46);
                // v47 = .unknown
            } catch(v48) {
            }
            const v49 = v18 + 1;
            // v49 = .primitive
            v18 = v49;
        } while (v18 < 8);
    }
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v52 = v51;
const v53 = v11(v52);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
