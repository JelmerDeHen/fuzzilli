function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {__proto__:"name",length:v4,c:-2397065686};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "c"])
function v6(v7,v8) {
    let v10 = 0;
    const v15 = [v7];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v16 = {b:v15,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
    // v16 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "b", "e", "length", "__proto__"])
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
    // v27 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "a", "__proto__", "b", "e"])
}
for (let v31 = 0; v31 < 100; v31++) {
    const v32 = v6();
    // v32 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
