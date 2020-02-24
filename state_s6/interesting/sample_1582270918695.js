function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [13.37,9,"Blv+6nqKk3"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {length:v7,toString:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "length", "__proto__"])
const v9 = {d:v6,__proto__:v7,e:Uint32Array,constructor:v7,length:"Blv+6nqKk3",b:v8,toString:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "constructor", "d", "e", "b", "length"])
let v10 = v6;
function v13(v14,v15) {
    for (const v18 in "boolean") {
        let v20 = 0;
        const v22 = [1337,1337,1337,1337];
        // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        function v26(v27,v28,v29,...v30) {
            return v30;
        }
        let v32 = 0;
        const v33 = v32 >= v20;
        // v33 = .boolean
        for (let v37 = 0; v37 < 100; v37++) {
            const v38 = v26(-92412138,1337,13.37,1337,9007199254740993,v33,1,v18);
            // v38 = .unknown
        }
        let v41 = 0;
        const v45 = v41 + 1;
        // v45 = .primitive
        v41 = v45;
    }
    let v49 = 0;
    let v52 = 0;
    const v53 = v52 + 1;
    // v53 = .primitive
    v52 = v53;
    const v54 = v49 + 1;
    // v54 = .primitive
    v49 = v54;
    return 1337;
}
const v56 = [1337];
// v56 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v57 = v56;
const v58 = v13(v57);
// v58 = .unknown
v58.c = v13;
function v59(v60,v61,v62) {
    v10.__proto__ = v6;
    return v13;
}
const v63 = v13(1337,v56);
// v63 = .unknown
}
%NeverOptimizeFunction(main);
main();
