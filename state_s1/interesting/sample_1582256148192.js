function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {c:1337};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
function v4(v5,v6) {
    const v12 = [3156875969,3156875969,1337,DataView];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v13 = {constructor:v12,c:v12,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v13 = .object(ofGroup: Object, withProperties: ["constructor", "a", "__proto__", "d", "c", "e"])
    const v14 = {e:DataView,constructor:1337,valueOf:1337,d:v12};
    // v14 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor", "e", "d"])
    function v19(v20,v21) {
        const v24 = new Int16Array(19873);
        // v24 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
        for (const v25 of v24) {
        }
    }
    const v27 = [1337];
    // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v28 = v27;
    const v29 = v19(v28);
    // v29 = .unknown
    const v30 = v19(1337,v29);
    // v30 = .unknown
    let v33 = 0;
    for (const v34 in "boolean") {
        let v37 = 0;
        do {
            let v40 = 0;
            do {
                const v41 = v40 + 1;
                // v41 = .primitive
                v40 = v41;
            } while (v40 < 7);
            let v44 = 0;
            const v48 = v37 + 1;
            // v48 = .primitive
            v37 = v48;
        } while (v37 < 8);
    }
    const v49 = v33 + 1;
    // v49 = .primitive
    v33 = v49;
}
let v53 = 0;
const v54 = v53 + 1;
// v54 = .primitive
v53 = v54;
const v55 = v4(v1,v3);
// v55 = .unknown
const v57 = [1337];
// v57 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v58 = v57;
const v59 = v4(v58);
// v59 = .unknown
const v60 = v4();
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();
