function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = ["e",3999259790,v3];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v8(v9,v10) {
    const v14 = [3156875969,3156875969,1337,DataView];
    // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v17 = v14.includes(v4);
    // v17 = .boolean
    let v18 = 0;
    do {
        let v21 = 0;
        do {
            const v22 = v21 + 1;
            // v22 = .primitive
            const v23 = {constructor:3156875969,...v22,...8};
            // v23 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
            v21 = v22;
        } while (v21 < 7);
        const v24 = v18 + 1;
        // v24 = .primitive
        v18 = v24;
    } while (v18 < 8);
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v27 = v26;
const v28 = v8(v27);
// v28 = .unknown
const v29 = v8(1024,4.0);
// v29 = .unknown
const v30 = v8(v29,v27);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
