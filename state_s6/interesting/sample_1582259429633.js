function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v4,v4,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v4,__proto__:v7};
// v8 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "length"])
const v9 = {a:1337,toString:"NEGATIVE_INFINITY",constructor:"NEGATIVE_INFINITY",valueOf:v8,b:13.37,c:Infinity,e:Infinity};
// v9 = .object(ofGroup: Object, withProperties: ["e", "c", "constructor", "valueOf", "a", "b", "__proto__", "toString"])
let v10 = v7;
for (let v14 = 0; v14 < 8; v14++) {
    let v18 = 0;
    do {
        let v22 = 0;
        const v25 = (1337).__proto__;
        // v25 = .unknown
        const v28 = {constructor:"symbol",length:9007199254740993};
        // v28 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
        let v30 = 0;
        const v31 = v30 + 1;
        // v31 = .primitive
        v30 = v31;
        function v32(v33,v34,v35,v36,v37) {
            const v38 = v28[1288410297];
            // v38 = .unknown
        }
        let v41 = 0;
        do {
            for (let v45 = 0; v45 < 100; v45++) {
                const v46 = v32();
                // v46 = .unknown
            }
            const v47 = v41 + 1;
            // v47 = .primitive
            v41 = v47;
        } while (v41 < 2);
        let v56 = 0;
        const v58 = v25.toLocaleString(0);
        // v58 = .unknown
        const v59 = v18 + 1;
        // v59 = .primitive
        v18 = v59;
    } while (v18 <= 8);
}
}
%NeverOptimizeFunction(main);
main();
