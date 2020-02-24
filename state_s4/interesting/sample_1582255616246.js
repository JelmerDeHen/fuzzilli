function main() {
for (let v11 = 0; v11 < 3; v11++) {
    let v14 = 0;
    function v15(v16,v17,v18,v19,v20) {
    }
    for (const v22 in "object") {
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v24 = {b:v23,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "e", "length", "valueOf", "a"])
const v27 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v27 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e", "b", "d"])
for (const v30 in "object") {
}
const v33 = 1337 == 13.37;
// v33 = .boolean
let v36 = 0;
do {
    const v37 = v36 + 1;
    // v37 = .primitive
    v36 = v37;
} while (v36 < 7);
let v40 = 0;
do {
    function v41(v42,v43,v44,v45,v46) {
    }
    const v47 = v40 + 1;
    // v47 = .primitive
    v40 = v47;
} while (v40 < 7);
const v48 = typeof v27;
// v48 = .string
const v50 = v48 === "string";
// v50 = .boolean
const v51 = {...v24,...0,...v40};
// v51 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "e", "a", "length"])
}
%NeverOptimizeFunction(main);
main();
