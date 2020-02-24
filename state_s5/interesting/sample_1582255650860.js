function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {length:13.37,b:"DcfX6ukbNP",d:1337,valueOf:v4,toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "d", "valueOf", "b", "toString"])
const v9 = {valueOf:v7,c:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "c"])
let v10 = 1337;
for (let v14 = 0; v14 < 3; v14++) {
    function v15(v16,v17) {
        const v23 = [3156875969,3156875969,1337,DataView];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v24 = {e:DataView,constructor:1337,valueOf:1337,d:v23};
        // v24 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "valueOf", "constructor"])
        for (const v31 in "boolean") {
            const v32 = 1 << "boolean";
            // v32 = .integer
            let v36 = 0;
            do {
                const v39 = {constructor:3156875969,c:v36,d:3156875969,e:0,valueOf:v24};
                // v39 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "c", "valueOf", "e", "d"])
                let v42 = 0;
                const v43 = v42 + 1;
                // v43 = .primitive
                const v46 = v36 + 1;
                // v46 = .primitive
                v36 = v46;
            } while (v36 < 8);
        }
    }
    const v48 = [3];
    // v48 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v49 = v48;
    const v50 = v15(v49);
    // v50 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
