function main() {
const v2 = (1337).__proto__;
// v2 = .unknown
const v4 = v2.toLocaleString(3603679119);
// v4 = .unknown
const v8 = [13.37,13.37,13.37,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v11 = [v10];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = {b:v8,c:v8,d:v8,__proto__:v11,valueOf:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "b", "d", "__proto__"])
const v13 = {a:1351830868,d:v10,toString:"0uJlcnwv*J",valueOf:1351830868,b:13.37};
// v13 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "a", "__proto__", "b", "d"])
let v14 = 13.37;
function v15(v16,v17) {
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            for (let v28 = 0; v28 < 6; v28++) {
                for (let v32 = 0; v32 < 100; v32++) {
                    function v33(v34,v35) {
                        return v32;
                    }
                }
            }
            let v36 = 0;
            const v37 = v36 + 1;
            // v37 = .primitive
            v36 = v37;
            const v41 = v22 + 1;
            // v41 = .primitive
            v22 = v41;
        } while (v22 < 8);
    }
    let v44 = 0;
    const v45 = v44 + 1;
    // v45 = .primitive
    v44 = v45;
    const v48 = new Float64Array(57816);
    // v48 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
    let v51 = 0;
    const v52 = v51 + 1;
    // v52 = .primitive
    v51 = v52;
    let v55 = 0;
    const v56 = Float64Array + 1;
    // v56 = .primitive
    v55 = v56;
    let v60 = 0;
    const v62 = [1337];
    // v62 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v63 = v62;
    const v66 = Math.pow(v63);
    // v66 = .number
    const v69 = new Uint8Array(19873);
    // v69 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
    const v70 = v60 + 1;
    // v70 = .primitive
    v60 = v70;
    for (const v71 in v48) {
    }
    return String;
}
const v76 = [1337];
// v76 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v77 = v76;
const v78 = v15(v77);
// v78 = .unknown
}
%NeverOptimizeFunction(main);
main();
