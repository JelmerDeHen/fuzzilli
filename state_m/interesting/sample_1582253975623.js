function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "valueOf", "length", "e", "b"])
const v9 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "b", "d", "e", "__proto__"])
let v10 = v4;
const v14 = gc();
// v14 = .undefined
const v16 = [13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v18 = [1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v19 = [13.37,v16];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v20 = {c:13.37};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
let v21 = 1337;
if (v8) {
    const v22 = v10 < "iterator";
    // v22 = .boolean
    let v23 = v22;
    if (v22) {
        for (let v27 = 0; v27 < 9; v27++) {
            const v28 = Uint16Array - 1;
            // v28 = .number
        }
        v23 = 4294967297;
    } else {
        const v29 = v9.flatMap(v22,13.37,v20,v18);
        // v29 = .unknown
        v23 = v22;
    }
    v21 = v8;
} else {
    const v30 = [];
    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    v21 = v7;
}
v18[v19] = v9;
v9[v4] = 4294967297;
const v31 = {d:gc,valueOf:v18};
// v31 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["d"])
let v32 = 1337;
const v33 = v16[1024];
// v33 = .unknown
let v36 = 0;
do {
    const v37 = v31 - 1337;
    // v37 = .number
    const v38 = v21.__proto__;
    // v38 = .unknown
    const v40 = [1337,1337,1337];
    // v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v41 = v4[v38];
    // v41 = .unknown
    const v42 = v33 - 1;
    // v42 = .primitive
    const v43 = v36 + 1;
    // v43 = .primitive
    v36 = v43;
} while (v36 < 3);
v36 = 3;
const v44 = {__proto__:3,constructor:v36,d:v20,valueOf:v33,length:13.37};
// v44 = .object(ofGroup: Object, withProperties: ["length", "constructor", "valueOf", "__proto__", "d"])
const v46 = Object();
// v46 = .object()
}
%NeverOptimizeFunction(main);
main();
