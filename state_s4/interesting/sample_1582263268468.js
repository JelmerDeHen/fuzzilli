function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {constructor:-4294967295,__proto__:v3,toString:v3,d:-4294967295,length:v3,a:-4294967295};
// v4 = .object(ofGroup: Object, withProperties: ["length", "toString", "a", "d", "__proto__", "constructor"])
function v5(v6,v7) {
    let v11 = 0;
    do {
        const v12 = v11 + 1;
        // v12 = .primitive
        v11 = v12;
    } while (v11 < 8);
    const v17 = [1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v18 = {b:13.37,d:1607264097,e:1607264097,constructor:v17,valueOf:WeakSet};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "b", "e", "constructor", "d"])
    let v23 = 0;
    const v24 = v23 + 1;
    // v24 = .primitive
    v23 = v24;
    let v27 = 0;
    const v28 = v27 + 1;
    // v28 = .primitive
    v27 = v28;
    const v31 = [13.37,13.37,13.37,13.37,13.37];
    // v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v33 = [1337,v31,13.37,1024];
    // v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    for (const v35 in "object") {
        let v39 = 0;
        const v40 = v33.slice();
        // v40 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v41 = v39 + 1;
        // v41 = .primitive
        v39 = v41;
        const v43 = Symbol.toStringTag;
        // v43 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        v33[v43] = 0;
        for (let v48 = 0; v48 < 5; v48++) {
            let v51 = 0;
            do {
                const v52 = v51 + 1;
                // v52 = .primitive
                v51 = v52;
            } while (v51 < 6);
        }
    }
    let v55 = 0;
    const v56 = v55 + 1;
    // v56 = .primitive
    v55 = v56;
    let v59 = 0;
    const v60 = v59 + 1;
    // v60 = .primitive
    v59 = v60;
    let v63 = 0;
    const v64 = v63 + 1;
    // v64 = .primitive
    v63 = v64;
}
const v66 = [1337];
// v66 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v67 = v66;
const v68 = v5(v67);
// v68 = .unknown
const v69 = v5(Promise,v4);
// v69 = .unknown
}
%NeverOptimizeFunction(main);
main();
