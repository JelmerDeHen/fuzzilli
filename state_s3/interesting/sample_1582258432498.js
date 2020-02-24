function main() {
let v1 = 1337;
let v3 = undefined;
let v6 = 0;
do {
    const v11 = [];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v12 = {valueOf:v11,length:13.37,d:127,e:127};
    // v12 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "valueOf", "d"])
    let v13 = v12;
    function v14(v15,v16) {
        for (const v18 in "undefined") {
            let v20 = 0;
            let v22 = v16;
            do {
                const v26 = [13.37,13.37,13.37,13.37];
                // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                const v28 = [v26,471091797,DataView];
                // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                const v29 = {c:1337};
                // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
                const v30 = {constructor:v26,toString:v29,__proto__:471091797,length:v28};
                // v30 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "length", "constructor"])
                const v31 = v22 + 1;
                // v31 = .primitive
                v22 = v31;
            } while (v22 < 7);
            const v32 = v20 + 1;
            // v32 = .primitive
            v13 = v32;
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v35 = v34;
    const v36 = v14(v35);
    // v36 = .unknown
    let v44 = 0;
    const v45 = v6 + 1;
    // v45 = .primitive
    v6 = v45;
} while (v6 < 8);
}
%NeverOptimizeFunction(main);
main();
