function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [-2147483647];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {constructor:v6,length:v4,valueOf:v4,b:v7,a:13.37,c:isNaN};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "b", "valueOf", "length", "constructor"], withMethods: ["c"])
const v11 = {constructor:"symbol",length:9007199254740993};
// v11 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
function v16(v17,v18,v19,v20,v21) {
    const v22 = v11[1288410297];
    // v22 = .unknown
}
let v25 = 0;
do {
    for (let v29 = 0; v29 < 100; v29++) {
        const v30 = v16();
        // v30 = .unknown
    }
    const v31 = v25 + 1;
    // v31 = .primitive
    v25 = v31;
} while (v25 < 2);
let v40 = isNaN;
let v42 = 0;
let v45 = 0;
function v46(v47,v48) {
    const v51 = [1337];
    // v51 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v52(v53,v54) {
        let v57 = 0;
        Array.prototype = 1337;
        do {
            if (v48) {
            } else {
                const v60 = v46(v45,v51);
                // v60 = .unknown
            }
            const v61 = v57 + 1;
            // v61 = .primitive
            v57 = v61;
        } while (v57 < 9);
        return v42;
    }
    const v62 = v52();
    // v62 = .unknown
    let v65 = 0;
    do {
        const v66 = v65 + 1;
        // v66 = .primitive
        v65 = v66;
        v47.valueOf = v47;
    } while (v65 < 7);
    return v46;
}
const v68 = [1337];
// v68 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v69 = v68;
const v70 = v46(v69);
// v70 = .unknown
const v71 = v46(v42,0);
// v71 = .unknown
}
%NeverOptimizeFunction(main);
main();
