function main() {
function v0(v1,v2) {
    let v5 = 0;
    const v15 = [1337];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v16 = {b:v15,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
    // v16 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "length", "e", "__proto__", "b"])
    let v21 = 0;
    const v22 = v21 + 1;
    // v22 = .primitive
    v21 = v22;
    let v25 = 0;
    const v26 = v25 + 1;
    // v26 = .primitive
    v25 = v26;
    const v27 = {...v16,...0,...v25};
    // v27 = .object(ofGroup: Object, withProperties: ["b", "a", "e", "__proto__", "valueOf", "length"])
    const v28 = v5 + 1;
    // v28 = .primitive
    v5 = v28;
}
for (let v33 = 0; v33 < 100; v33++) {
    const v34 = v0();
    // v34 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
