function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,v6,"undefined"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:v7,length:"undefined",d:v7,e:13.37,toString:v6,valueOf:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["length", "toString", "valueOf", "e", "__proto__", "d"])
const v9 = {__proto__:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = "undefined";
function v11(v12,v13) {
    const v16 = {get:Uint8ClampedArray};
    // v16 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v18 = Object.prototype;
    // v18 = .object()
    function v19(v20,v21) {
        const v22 = v20 in v19;
        // v22 = .boolean
        for (const v25 in "boolean") {
            let v26 = 13.37;
            delete "boolean"[v16];
            const v29 = v18.__proto__;
            // v29 = .unknown
            let v32 = 0;
            const v33 = "boolean" - 1;
            // v33 = .primitive
            const v34 = v32 + 1;
            // v34 = .primitive
            v32 = v34;
            const v35 = 0 - v26;
            // v35 = .number
            const v36 = v21[1378211344];
            // v36 = .unknown
            let v37 = 0;
            do {
                const v38 = v37 + 1;
                // v38 = .primitive
                const v40 = v22 == 0;
                // v40 = .boolean
                v37 = v38;
            } while (v37 < 7);
        }
    }
    for (const v41 in "boolean") {
        let v44 = 0;
        do {
            const v46 = [13.37,13.37];
            // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v47 = {};
            // v47 = .object(ofGroup: Object, withProperties: ["__proto__"])
            let v50 = 0;
            const v51 = v50 + 1;
            // v51 = .primitive
            v50 = v51;
            const v53 = v46.every(Array,v47);
            // v53 = .boolean
            const v56 = new Int8Array(1024);
            // v56 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
            for (const v57 in v56) {
            }
            let v60 = 0;
            const v61 = v60 + 1;
            // v61 = .primitive
            v60 = v61;
            for (let v65 = 0; v65 < 6; v65++) {
            }
            const v67 = 13.37 + 1;
            // v67 = .primitive
            v44 = v67;
        } while (v44 < 8);
    }
    return v6;
}
const v69 = [1337];
// v69 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v70 = v69;
const v71 = v11(v70);
// v71 = .unknown
}
%NeverOptimizeFunction(main);
main();
