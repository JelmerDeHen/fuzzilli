function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {__proto__:"name",length:v4,c:-2397065686};
// v5 = .object(ofGroup: Object, withProperties: ["length", "c", "__proto__"])
function v6(v7,v8) {
    let v10 = 0;
    const v15 = [v7];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v16 = {b:v15,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
    // v16 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__", "b", "length", "e"])
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
    // v27 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "length", "b", "__proto__", "a"])
}
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v6();
    // v32 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
