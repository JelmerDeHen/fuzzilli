function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {e:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v7;
for (let v22 = 0; v22 < 3; v22++) {
    let v25 = 0;
    function v26(v27,v28,v29,v30,v31) {
        return v26;
    }
    for (const v33 in "object") {
        const v35 = [13.37,13.37,13.37];
        // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v39 = 0;
        const v40 = v39 + 1;
        // v40 = .primitive
        v39 = v40;
        const v41 = [1337,1337,1337,1337];
        // v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        for (let v45 = 0; v45 < 100; v45++) {
        }
        v41[0] = v35;
        const v48 = gc();
        // v48 = .undefined
        let v52 = 0;
        const v53 = v52 + 1;
        // v53 = .primitive
        v52 = v53;
    }
}
const v54 = ["iterator"];
// v54 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v55 = {b:v54,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v55 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "b", "length", "a"])
const v58 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v58 = .object(ofGroup: Object, withProperties: ["toString", "b", "__proto__", "d", "e"])
for (const v61 in "object") {
}
const v64 = 1337 == 13.37;
// v64 = .boolean
let v67 = 0;
do {
    const v68 = v67 + 1;
    // v68 = .primitive
    v67 = v68;
} while (v67 < 7);
let v71 = 0;
do {
    function v72(v73,v74,v75,v76,v77) {
        return v73;
    }
    const v78 = v71 + 1;
    // v78 = .primitive
    v71 = v78;
} while (v71 < 13.37);
const v79 = typeof v58;
// v79 = .string
const v81 = v79 === "string";
// v81 = .boolean
const v82 = {...v55,...0,...v71};
// v82 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "b", "a", "e"])
}
%NeverOptimizeFunction(main);
main();
