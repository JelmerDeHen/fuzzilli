function main() {
for (let v8 = 0; v8 < 3; v8++) {
    function v9(v10,v11,v12,v13,v14) {
    }
    for (const v16 in "object") {
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v18 = {b:v17,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v18 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "b", "valueOf", "length"])
for (const v21 in "object") {
}
let v24 = 0;
do {
    const v25 = v24 + 1;
    // v25 = .primitive
    v24 = v25;
} while (v24 < 7);
let v28 = 0;
do {
    function v29(v30,v31,v32,v33,v34) {
    }
    const v35 = v28 + 1;
    // v35 = .primitive
    v28 = v35;
} while (v28 < 7);
const v37 = {...v18,...0,...v28};
// v37 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "length", "__proto__", "a", "b"])
v37.valueOf = "string";
const v39 = [1337,1337];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();
