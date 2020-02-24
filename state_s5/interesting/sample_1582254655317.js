function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [13.37,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v9 = {d:gc,valueOf:v6};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["d"])
let v10 = 1337;
const v15 = [13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v17 = [1337,1337,1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v18 = [v15,471091797,DataView];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v19 = {c:1337};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v20 = {constructor:v15,toString:v19,__proto__:471091797,length:v18};
// v20 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "constructor", "length"])
let v21 = 471091797;
function v31(v32,v33) {
    const v34 = v32 in v31;
    // v34 = .boolean
    const v40 = [3156875969,3156875969,1337,DataView];
    // v40 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v41 = {constructor:v40,c:v40,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v41 = .object(ofGroup: Object, withProperties: ["c", "a", "__proto__", "d", "constructor", "e"])
    const v42 = {e:DataView,constructor:1337,valueOf:1337,d:v40};
    // v42 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "d", "constructor", "__proto__"])
    for (let v55 = 0; v55 < 10; v55++) {
    }
    let v64 = 0;
    for (const v65 in "boolean") {
        let v68 = 0;
        do {
            try {
                let v71 = 0;
                do {
                    const v72 = v71 + 1;
                    // v72 = .primitive
                    v71 = v72;
                } while (v71 < 7);
            } catch(v73) {
                let v76 = 0;
                while (v76 < 10) {
                    for (let v80 = 0; v80 < 0; v80++) {
                    }
                }
                try {
                } catch(v81) {
                }
            }
            const v82 = v68 + 1;
            // v82 = .primitive
            v68 = v82;
        } while (v68 < 8);
    }
    do {
        const v83 = v64 + 1;
        // v83 = .primitive
        v64 = v83;
    } while (v64 < 3);
    for (const v89 in "object") {
    }
    return 13.37;
}
const v103 = [1337];
// v103 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v105 = v103;
const v107 = v31(v105);
// v107 = .unknown
const v108 = v31();
// v108 = .unknown
}
%NeverOptimizeFunction(main);
main();
