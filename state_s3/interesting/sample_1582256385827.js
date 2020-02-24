function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {e:13.37,d:1337,valueOf:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "d"])
const v9 = {toString:13.37,d:v4,e:DataView,length:v7,a:"toString"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "toString", "e", "a", "length"])
let v10 = v6;
const v12 = [-348668.18945054675,-348668.18945054675,-348668.18945054675];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v14 = (0)[v6];
// v14 = .unknown
"toString".__proto__ = v12;
for (let v17 = 0; v17 < 3; v17++) {
    function v18(v19,v20) {
        const v23 = new Object(v12,1,-2331772471,Object);
        // v23 = .object()
        for (const v28 in "boolean") {
            let v31 = 0;
            do {
                const v35 = [-842252194,-842252194,1337,DataView];
                // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                const v37 = 10 && "toString";
                // v37 = .boolean
                let v40 = 0;
                do {
                    function v41(v42,v43,v44,v45,v46) {
                        const v47 = new v46(v43);
                        // v47 = .object()
                        return v41;
                    }
                    const v48 = v40 + 1;
                    // v48 = .primitive
                    v40 = v48;
                } while (v40 < 7);
                const v49 = (1337)[v31];
                // v49 = .unknown
                let v50 = 1;
                let v53 = 0;
                const v55 = [13.37,13.37,13.37,13.37,13.37];
                // v55 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                let v56 = v55;
                const v57 = v31 + 1;
                // v57 = .primitive
                v31 = v57;
            } while (v31 < 8);
        }
        return 0;
    }
    const v59 = [1337];
    // v59 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v60 = v59;
    const v61 = v18(v60);
    // v61 = .unknown
}
let v63 = 0;
const v64 = v63 + 1;
// v64 = .primitive
const v65 = !"toString";
// v65 = .boolean
v10 = v9;
let v66 = "toString";
if (v65) {
    let v67 = 0;
    v66 = v64;
} else {
    for (const v68 in v66) {
        const v69 = !v12;
        // v69 = .boolean
    }
    v66 = DataView;
}
v63 = v64;
}
%NeverOptimizeFunction(main);
main();
