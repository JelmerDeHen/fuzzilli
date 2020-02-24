function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = ["Q3UxowGAey",v6,v4];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {__proto__:"Q3UxowGAey",b:13.37,valueOf:v7,e:11073918,toString:v6};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "__proto__", "b", "e"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = v4;
const v15 = [-226420.98374689778,-226420.98374689778,-226420.98374689778,-226420.98374689778,-226420.98374689778];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v17 = 11073918;
const v18 = {b:1337,constructor:"symbol",e:-1024,c:-1024,a:v15,valueOf:-226420.98374689778};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "e", "b", "constructor", "c"])
const v20 = [RegExp,13.37,13.37,13.37];
// v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v23(v24,v25) {
    for (const v27 in "boolean") {
        let v30 = 0;
        do {
            try {
                let v33 = v20;
                const v34 = {set:v25};
                // v34 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
                const v35 = v18[1337];
                // v35 = .unknown
                const v36 = v17("symbol");
                // v36 = .unknown
                const v37 = v35(v34,1024,0);
                // v37 = .unknown
                with (v17) {
                    v37[v33] = v27;
                }
            } catch(v38) {
            }
            function v39(v40,v41) {
                return v40;
            }
            const v42 = v30 + 1;
            // v42 = .primitive
            v30 = v42;
        } while (v30 < 8);
    }
    return v24;
}
const v44 = v23(1024,4.0);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
