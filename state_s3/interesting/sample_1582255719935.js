function main() {
function v0(v1,v2) {
    function v5(v6,v7) {
        for (const v9 in "boolean") {
            let v12 = 0;
            do {
                const v14 = [1337,1337];
                // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                const v16 = [1337,1337,1337,1337];
                // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                const v17 = v14.shift();
                // v17 = .unknown
                const v19 = Symbol.toPrimitive;
                // v19 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                v19[v19] = v16;
                let v22 = 0;
                do {
                    for (let v26 = 0; v26 < 100; v26++) {
                    }
                    const v31 = [1337,1337];
                    // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                    const v32 = {b:13.37,d:1607264097,e:1607264097,constructor:v31,valueOf:WeakSet};
                    // v32 = .object(ofGroup: Object, withProperties: ["b", "e", "valueOf", "d", "__proto__", "constructor"])
                    const v33 = v22 + 1;
                    // v33 = .primitive
                    v22 = v33;
                } while (v22 < 7);
                const v34 = v12 + 1;
                // v34 = .primitive
                v12 = v34;
            } while (v12 < 8);
        }
    }
    const v35 = v5();
    // v35 = .unknown
    let v36 = 0;
    const v37 = v36 + 1;
    // v37 = .primitive
    const v46 = [1337];
    // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v47 = {b:v46,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
    // v47 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "valueOf", "e", "b"])
    v36 = v37;
}
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v51 = v50;
const v52 = v0(v51);
// v52 = .unknown
const v53 = v0();
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
