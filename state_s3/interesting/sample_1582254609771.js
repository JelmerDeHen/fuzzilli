function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [v4,471091797,DataView];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {c:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v9 = {constructor:v4,toString:v8,__proto__:471091797,length:v7};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "toString"])
let v10 = 471091797;
function v20(v21,v22) {
    const v23 = v21 in v20;
    // v23 = .boolean
    const v29 = [3156875969,3156875969,1337,DataView];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v30 = {constructor:v29,c:v29,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v30 = .object(ofGroup: Object, withProperties: ["c", "d", "constructor", "__proto__", "e", "a"])
    const v31 = {e:DataView,constructor:1337,valueOf:1337,d:v29};
    // v31 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor", "d", "e"])
    for (let v44 = 0; v44 < 10; v44++) {
    }
    let v53 = 0;
    for (const v54 in "boolean") {
        let v57 = 0;
        do {
            try {
                let v60 = 0;
                do {
                    const v61 = v60 + 1;
                    // v61 = .primitive
                    v60 = v61;
                } while (v60 < 7);
            } catch(v62) {
                let v65 = 0;
                while (v65 < 10) {
                    for (let v69 = 0; v69 < 0; v69++) {
                    }
                }
                try {
                } catch(v70) {
                }
            }
            const v71 = v57 + 1;
            // v71 = .primitive
            v57 = v71;
        } while (v57 < 8);
    }
    do {
        const v72 = v53 + 1;
        // v72 = .primitive
        v53 = v72;
    } while (v53 < 3);
    for (const v78 in "object") {
    }
    return 13.37;
}
const v92 = [1337];
// v92 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v94 = v92;
const v96 = v20(v94);
// v96 = .unknown
const v97 = v20();
// v97 = .unknown
}
%NeverOptimizeFunction(main);
main();
