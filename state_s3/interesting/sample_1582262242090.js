function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [RegExp,v6,"NEGATIVE_INFINITY",13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {toString:v4,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["d", "constructor", "valueOf", "c", "a", "__proto__", "toString"], withMethods: ["b", "__proto__", "length"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v7;
const v12 = {a:isFinite};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
const v15 = [1337,v12,1337,1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v16(v17,v18) {
    let v21 = 0;
    for (const v22 in "boolean") {
        let v25 = 0;
        do {
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
        } while (v25 < 8);
    }
    function v30(v31,v32) {
        let v35 = 0;
        for (const v36 in "boolean") {
            let v39 = 0;
            do {
                try {
                    let v42 = 0;
                    do {
                        const v43 = [v39,7];
                        // v43 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                        const v44 = {a:v36,c:v43,valueOf:v42,constructor:0,b:"N0Xx92zvHQ"};
                        // v44 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "b", "a", "c", "__proto__"])
                        const v46 = {set:v32};
                        // v46 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
                        DataView.length = -1024;
                        const v53 = [13.37,13.37,13.37,13.37];
                        // v53 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                        const v54 = [v53,471091797,DataView];
                        // v54 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                        const v55 = Object.defineProperty(v44,"d",v46);
                        // v55 = .undefined
                        v42 = DataView;
                    } while (v42 < 7);
                } catch(v56) {
                }
                const v57 = v39 + 1;
                // v57 = .primitive
                v39 = v57;
            } while (v39 < 8);
        }
    }
    const v60 = v30(1024,4.0);
    // v60 = .unknown
    const v63 = undefined === WeakSet;
    // v63 = .boolean
    return 1337;
}
const v64 = v15.forEach(v16,"eeeRbEqfAO");
// v64 = .undefined
}
%NeverOptimizeFunction(main);
main();
