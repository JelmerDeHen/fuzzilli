function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v4,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {length:v4,toString:"MAX_SAFE_INTEGER",e:1337,d:1337};
// v8 = .object(ofGroup: Object, withProperties: ["d", "e", "length", "toString", "__proto__"])
const v9 = {__proto__:"MAX_SAFE_INTEGER",toString:3};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
let v10 = "MAX_SAFE_INTEGER";
const v12 = [13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v15 = {constructor:"symbol",length:9007199254740993};
// v15 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
function v16(v17,v18) {
    const v19 = v17 in v16;
    // v19 = .boolean
    let v26 = 0;
    for (const v27 in "boolean") {
        let v30 = 0;
        do {
            let v33 = 0;
            const v34 = v33 + 1;
            // v34 = .primitive
            v33 = v34;
            let v37 = 0;
            const v45 = [1337,1337];
            // v45 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v46 = [v45,v45,v45];
            // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            v45.length = 1337;
            let v47 = 1337;
            const v48 = {length:1805143900,a:"function",constructor:"function",d:"function",e:v47};
            // v48 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__", "e", "d"])
            let v50 = 0;
            const v51 = v50 + 1;
            // v51 = .primitive
            v50 = v51;
            let v54 = 0;
            const v56 = v30 + 1;
            // v56 = .primitive
            v30 = v56;
        } while (v30 < 8);
    }
    const v57 = v26 + 1;
    // v57 = .primitive
}
const v60 = [1337];
// v60 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v61 = v60;
const v62 = v16(v61);
// v62 = .unknown
const v66 = [13.37,13.37,13.37];
// v66 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v67 = v66[Uint16Array];
// v67 = .unknown
try {
} catch(v68) {
}
let v71 = 0;
const v72 = v71 + 1;
// v72 = .primitive
v71 = v72;
}
%NeverOptimizeFunction(main);
main();
