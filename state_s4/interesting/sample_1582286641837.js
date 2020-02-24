function main() {
const v3 = new Uint8Array(256);
// v3 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
const v5 = new Int32Array(v3);
// v5 = .object(ofGroup: Int32Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "copyWithin", "forEach", "subarray", "entries", "find", "reduceRight", "set", "filter", "keys", "indexOf", "some", "slice", "reverse", "values", "reduce", "findIndex", "includes", "sort", "fill", "every", "lastIndexOf", "join"])
const v9 = [13.37,13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = [1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = [-2628700107];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v13 = {e:gc,a:v9,__proto__:gc,d:v9};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "a"], withMethods: ["__proto__", "e"])
const v14 = {e:v12,a:13.37,b:13.37,length:1337,c:v11,d:1337};
// v14 = .object(ofGroup: Object, withProperties: ["d", "c", "__proto__", "a", "b", "e", "length"])
let v15 = "unscopable";
for (let v19 = 0; v19 < 3; v19++) {
    function v20(v21,v22) {
        let v29 = 0;
        for (const v30 in "boolean") {
            let v33 = 0;
            do {
                let v36 = 0;
                do {
                    const v37 = v36 + 1;
                    // v37 = .primitive
                    v36 = v37;
                } while (v36 < 7);
                let v40 = 0;
                const v41 = v33 + 1;
                // v41 = .primitive
                v33 = v41;
            } while (v33 < 8);
        }
        const v42 = v29 + 1;
        // v42 = .primitive
        const v45 = [13.37,13.37,13.37,13.37];
        // v45 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v47 = [1337,1337];
        // v47 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v48 = [v47];
        // v48 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v49 = {valueOf:Int32Array,c:v47,__proto__:v48,b:v45};
        // v49 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "c"])
        const v51 = new Map(v49);
        // v51 = .object(ofGroup: Map, withProperties: ["size", "__proto__"], withMethods: ["has", "keys", "get", "forEach", "entries", "set", "values", "clear", "delete"])
        const v52 = v51.clear();
        // v52 = .undefined
        v29 = v42;
        return v20;
    }
    const v55 = [1337];
    // v55 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v56 = v55;
    const v57 = v20(v56);
    // v57 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
