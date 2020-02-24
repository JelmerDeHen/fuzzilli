function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [parseFloat,v3];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = {__proto__:v5,e:-4070953421,d:v5,a:v6,length:parseFloat};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "e", "d"], withMethods: ["length"])
const v8 = {length:parseFloat,e:v3};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__"], withMethods: ["length"])
const v13 = [13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v14 = {toString:Uint8Array,d:"symbol",c:v13,a:13.37};
// v14 = .object(ofGroup: Object, withProperties: ["toString", "d", "c", "a", "__proto__"])
let v15 = -9007199254740991;
function v16(v17,v18) {
    function v21(v22,v23) {
        let v26 = 0;
        do {
            let v29 = 0;
            do {
                const v30 = v29 + 1;
                // v30 = .primitive
                const v31 = {constructor:3156875969,...v30,...8};
                // v31 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
                v29 = parseFloat;
            } while (v29 < 7);
            const v32 = v26 + 1;
            // v32 = .primitive
            v26 = v32;
        } while (v26 < 8);
    }
    let v34 = v7;
    const v35 = v21(v34);
    // v35 = .unknown
    const v36 = v21(1024,4.0);
    // v36 = .unknown
    const v37 = v21(v36,v34);
    // v37 = .unknown
}
const v38 = [v8];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v39 = v38;
const v40 = v16(v39);
// v40 = .unknown
const v41 = v16();
// v41 = .unknown
const v42 = v41 + v15;
// v42 = .primitive
const v43 = v16(v42,v14);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
