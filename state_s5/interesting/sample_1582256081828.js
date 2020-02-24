function main() {
function v0(v1,v2) {
    let v5 = 0;
    const v15 = [1337];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v16 = {b:v15,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
    // v16 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "__proto__", "a", "length", "b"])
    let v21 = 0;
    const v22 = v21 + 1;
    // v22 = .primitive
    v21 = v22;
    let v25 = 0;
    const v26 = v25 + 1;
    // v26 = .primitive
    v25 = v26;
    const v27 = {...v16,...0,...v25};
    // v27 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "valueOf", "e", "b"])
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
