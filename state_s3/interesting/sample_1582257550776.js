function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [1337,Promise];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {constructor:-4294967295,__proto__:v4,toString:v4,d:-4294967295,length:v4,a:-4294967295};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "d", "toString", "length", "constructor"])
const v9 = {e:13.37,valueOf:v4,__proto__:v6,toString:v6,a:v4,d:v4};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "e", "valueOf", "d", "a", "__proto__"])
let v10 = v7;
function v11(v12,v13) {
    const v14 = v12 in v11;
    // v14 = .boolean
    const v20 = [3156875969,3156875969,1337,1337];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v21 = {constructor:v20,c:v20,e:13.37,d:1337,a:3156875969,__proto__:"d"};
    // v21 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a", "c", "e", "d"])
    const v22 = {e:DataView,constructor:1337,valueOf:1337,d:v20};
    // v22 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "constructor", "valueOf"])
    for (let v27 = 0; v27 < 10; v27++) {
        const v30 = new Uint16Array("iterator");
        // v30 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["entries", "join", "lastIndexOf", "forEach", "filter", "slice", "reduce", "reverse", "findIndex", "keys", "fill", "map", "every", "set", "reduceRight", "includes", "sort", "find", "subarray", "indexOf", "values", "some", "copyWithin"])
        let v33 = 0;
        while (v33 < 9) {
            let v36 = 0;
            do {
                const v37 = v36 + 1;
                // v37 = .primitive
                v36 = v37;
            } while (v36 < 10);
            const v38 = v33 + 1;
            // v38 = .primitive
            v33 = v38;
        }
    }
    let v41 = 0;
    let v44 = 0;
    try {
        let v49 = 0;
        function v50(v51,v52) {
            'use strict'
            for (const v53 of v22) {
            }
        }
        const v57 = v49 + 1;
        // v57 = .primitive
        v49 = v57;
        let v58 = 0;
        do {
            const v59 = v58 + 1;
            // v59 = .primitive
            v58 = v59;
        } while (v58 < 7);
    } catch(v60) {
        let v63 = 0;
        while (v63 < 10) {
            for (let v66 = 0; v66 < 0; v66++) {
            }
        }
        try {
        } catch(v67) {
        }
    }
    const v68 = v44 + 1;
    // v68 = .primitive
    v44 = v68;
    const v69 = v41 + 1;
    // v69 = .primitive
    v41 = v69;
    return v69;
}
const v72 = [1337];
// v72 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v73 = v72;
const v74 = v11(v73);
// v74 = .unknown
let v77 = 0;
const v78 = v77 + 1;
// v78 = .primitive
v77 = v78;
v6.valueOf = v11;
let v81 = 0;
while (v81 < 8) {
    function v82(v83,v84,v85) {
        const v86 = v85(1337,v83);
        // v86 = .unknown
    }
    const v87 = v81 + 1;
    // v87 = .primitive
    v81 = v87;
}
for (let v92 = 0; v92 < 5; v92++) {
    v77 = v77;
}
with (v4) {
    const v95 = Symbol.iterator;
    // v95 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    v7[v95] = v8;
}
const v96 = v11(5,v8);
// v96 = .unknown
}
%NeverOptimizeFunction(main);
main();
