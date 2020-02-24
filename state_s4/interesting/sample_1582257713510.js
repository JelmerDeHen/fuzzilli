function main() {
let v3 = undefined;
let v10 = 0;
let v13 = 0;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
v16 = v17;
const v28 = v13 + 1;
// v28 = .primitive
v13 = v28;
const v29 = v10 + 1;
// v29 = .primitive
v10 = v29;
const v38 = 1337 == 13.37;
// v38 = .boolean
const v40 = Object();
// v40 = .object()
let v43 = 0;
const v44 = v43 + 1;
// v44 = .primitive
v43 = v44;
let v47 = 0;
const v48 = v47 + 1;
// v48 = .primitive
v47 = v48;
let v51 = 0;
const v52 = v51 + 1;
// v52 = .primitive
v51 = v52;
let v56 = 0;
const v58 = [1337,1337,1337,1337,1337];
// v58 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v59 = [];
// v59 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v61(v62,v63) {
    let v67 = 0;
    for (const v68 in "boolean") {
        let v71 = 0;
        do {
            let v73 = 0;
            let v75 = 0;
            function v79(v80,v81,v82,v83,v84) {
                const v85 = [v75,v79,13.37];
                // v85 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            }
            const v87 = [3156875969,3156875969,1337,DataView];
            // v87 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v88 = v71 + 1;
            // v88 = .primitive
            v71 = v88;
        } while (v71 < 8);
    }
    const v89 = new Int16Array(0);
    // v89 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
    v89[v67] = v58;
}
const v91 = [1337];
// v91 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v92 = v91;
const v93 = v61(v92);
// v93 = .unknown
const v94 = v61(1337,v59);
// v94 = .unknown
const v95 = v61(0);
// v95 = .unknown
}
%NeverOptimizeFunction(main);
main();
