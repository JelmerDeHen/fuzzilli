function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {__proto__:"name",length:v4,c:-2397065686};
// v5 = .object(ofGroup: Object, withProperties: ["length", "c", "__proto__"])
function v6(v7,v8) {
    let v10 = 0;
    const v15 = [v7];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v16 = {b:v15,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "length", "b", "e"])
    v10 = v5;
    const v18 = Number(v4);
    // v18 = .number
    let v21 = 0;
    while (v21 < 4) {
        const v22 = v5.c;
        // v22 = .unknown
        const v23 = v21 + 1;
        // v23 = .primitive
        v21 = v23;
    }
    let v25 = 0;
    const v26 = v25 + 1;
    // v26 = .primitive
    const v27 = {...v16,...0,...v25};
    // v27 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "b", "a", "__proto__", "length"])
}
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v6();
    // v32 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
