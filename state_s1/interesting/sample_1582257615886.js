function main() {
function v1(v2,v3) {
    let v10 = 0;
    let v13 = 0;
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
    const v28 = v13 + 1;
    // v28 = .primitive
    v13 = v28;
    const v29 = v10 + 1;
    // v29 = .primitive
    v10 = v29;
    const v38 = 1337 == 13.37;
    // v38 = .boolean
    const v40 = Object();
    // v40 = .object()
    function v41(v42,v43) {
        for (const v45 in "boolean") {
            let v48 = 0;
            do {
                let v51 = 0;
                function v52(v53,v54) {
                    for (const v56 in "boolean") {
                        let v59 = 0;
                        do {
                            const v61 = Symbol.toPrimitive;
                            // v61 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                            const v62 = v59 + 1;
                            // v62 = .primitive
                            v59 = v62;
                        } while (v59 < 8);
                    }
                }
                const v64 = [1337];
                // v64 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                let v65 = v64;
                const v66 = v52(v65);
                // v66 = .unknown
                do {
                    const v67 = v51 + 1;
                    // v67 = .primitive
                    v51 = v67;
                } while (v51 < 7);
                const v68 = v48 + 1;
                // v68 = .primitive
                v48 = v68;
            } while (v48 < 8);
        }
    }
    const v70 = [1337];
    // v70 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v71 = v70;
    const v72 = v41(v71);
    // v72 = .unknown
    const v74 = Symbol.match;
    // v74 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    Symbol[v74] = v74;
    let v77 = 0;
    const v78 = v77 + 1;
    // v78 = .primitive
    v77 = v78;
    let v81 = 0;
    const v82 = v81 + 1;
    // v82 = .primitive
    v81 = v82;
    let v85 = 0;
    const v86 = v85 + 1;
    // v86 = .primitive
    v85 = v86;
}
const v89 = [1337];
// v89 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v90 = v89;
const v91 = v1(v90);
// v91 = .unknown
const v92 = v1(1024,4.0);
// v92 = .unknown
const v97 = [1337,"N0Xx92zvHQ"];
// v97 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v98 = v97[1024];
// v98 = .unknown
let v101 = 0;
let v115 = 0;
let v118 = 0;
let v121 = 0;
}
%NeverOptimizeFunction(main);
main();
