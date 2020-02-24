function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v6,1337,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {constructor:-4294967295,length:1337,__proto__:v4};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
const v9 = {a:-4294967295,e:13.37,__proto__:"dVmqACI+Vs",length:v4,b:-4294967295};
// v9 = .object(ofGroup: Object, withProperties: ["length", "e", "a", "__proto__", "b"])
let v10 = "dVmqACI+Vs";
let v14 = 0;
while (v14 < 1337) {
    function v16(v17,v18) {
        for (const v20 in v18) {
            let v23 = 0;
            do {
                let v26 = 0;
                const v27 = v26 + 1;
                // v27 = .primitive
                v26 = v27;
                const v28 = v23 + 1;
                // v28 = .primitive
                let v31 = 0;
                while (v31 < v18) {
                    const v32 = v31 + 1;
                    // v32 = .primitive
                    v31 = v32;
                }
                v23 = v28;
            } while (v23 < 8);
        }
        const v33 = DataView + 1;
        // v33 = .primitive
        function v34(v35,v36) {
            const v39 = new Int16Array(19873);
            // v39 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
            const v40 = 13.37 * v33;
            // v40 = .number
            for (const v41 of v39) {
            }
            return v18;
        }
        const v43 = [1337];
        // v43 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v44 = v43;
        const v45 = v34(v44);
        // v45 = .unknown
        return DataView;
    }
    const v47 = [1337];
    // v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v48 = v47;
    const v49 = v16(v48);
    // v49 = .unknown
    const v50 = v14 + 1;
    // v50 = .primitive
    v14 = v50;
}
const v51 = v6 <= v9;
// v51 = .boolean
let v52 = Boolean;
if (v51) {
    delete (-4294967295)[1337];
    v52 = v14;
} else {
    let v55 = 0;
    do {
        function v56(v57,v58) {
            const v59 = v7.forEach(v57,v57);
            // v59 = .undefined
            return 0;
        }
        const v60 = v55 + 1;
        // v60 = .primitive
        v55 = v60;
    } while (v55 < 0);
    v52 = v55;
}
const v61 = Boolean(v52);
// v61 = .boolean
}
%NeverOptimizeFunction(main);
main();
