function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4,String,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {valueOf:1337,c:3971043784,b:13.37,a:"number"};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "a", "c"])
const v9 = {c:String};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c"])
let v10 = v4;
function v12(v13,v14) {
    let v17 = 0;
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            let v24 = 0;
            const v26 = [13.37,13.37,13.37,13.37];
            // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v31 = {length:"N0Xx92zvHQ"};
            // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
            const v32 = {constructor:13.37,length:13.37,__proto__:v31,toString:Number,a:"N0Xx92zvHQ"};
            // v32 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "a"], withMethods: ["toString"])
            let v33 = v32;
            const v36 = {get:Number};
            // v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
            const v38 = Object.defineProperty(v26,538470966,v36);
            // v38 = .undefined
            v26.length = v33;
            do {
                const v51 = v24 + 1;
                // v51 = .primitive
                v24 = v51;
            } while (v24 < 7);
            const v55 = {constructor:"symbol",length:9007199254740993};
            // v55 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
            const v58 = [13.37,13.37,13.37];
            // v58 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v59 = [];
            // v59 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v60 = v58[Function];
            // v60 = .unknown
            try {
                const v61 = v60(v59,v55);
                // v61 = .unknown
            } catch(v62) {
            }
            let v63 = 0;
            const v64 = v21 + 1;
            // v64 = .primitive
            v21 = v64;
        } while (v21 < 8);
    }
    const v65 = v17 + 1;
    // v65 = .primitive
    return gc;
}
const v67 = [1337];
// v67 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v68 = v67;
const v69 = v12(v68);
// v69 = .unknown
const v70 = v12();
// v70 = .unknown
const v71 = v6 + v68;
// v71 = .primitive
const v72 = new v70(1337,v68);
// v72 = .object()
const v73 = new v70();
// v73 = .object()
delete v8.c;
const v74 = gc();
// v74 = .undefined
}
%NeverOptimizeFunction(main);
main();
