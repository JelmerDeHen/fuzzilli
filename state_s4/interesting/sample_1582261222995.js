function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [Float64Array,-1773153690,1337,v4];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {a:v7,valueOf:v4,c:Float64Array,length:"g3lWuYSlmh",__proto__:-1773153690,toString:v4,b:v4,d:"g3lWuYSlmh"};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "b", "d", "__proto__", "a", "c", "toString"])
const v9 = {d:1337,constructor:v6,toString:v6};
// v9 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "toString"])
let v10 = v9;
function v12(v13,v14) {
    const v18 = {length:"N0Xx92zvHQ"};
    // v18 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v19 = {constructor:13.37,length:13.37,__proto__:v18,toString:Number,a:"N0Xx92zvHQ"};
    // v19 = .object(ofGroup: Object, withProperties: ["constructor", "a", "length", "__proto__"], withMethods: ["toString"])
    let v20 = v19;
    const v22 = [v20,-2147483649];
    // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v25 = [-2.0,-2.0];
    // v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v26 = [13.37,v25];
    // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v27 = gc(...v22,...v26);
    // v27 = .undefined
    let v35 = 0;
    for (const v36 in "boolean") {
        let v39 = 0;
        do {
            let v42 = 0;
            do {
                const v43 = v42 + 1;
                // v43 = .primitive
                v42 = v43;
            } while (v42 < 7);
            let v46 = 0;
            const v49 = v39 + 1;
            // v49 = .primitive
            v39 = v49;
        } while (v39 < 8);
    }
    const v50 = v35 + 1;
    // v50 = .primitive
    v35 = v50;
    return v4;
}
const v54 = [1337];
// v54 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v55 = v54;
const v56 = v12(v55);
// v56 = .unknown
const v57 = v12();
// v57 = .unknown
let v59 = 0;
const v60 = v12("undefined",4.0);
// v60 = .unknown
let v62 = 0;
}
%NeverOptimizeFunction(main);
main();
