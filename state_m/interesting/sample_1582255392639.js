function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [1337,v6,"e",v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {b:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v9 = {valueOf:"e",length:1337,a:v6,b:v6,e:1337};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "length", "a", "b", "__proto__"])
let v10 = "e";
const v14 = [];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v15 = {valueOf:v14,length:13.37,d:127,e:127};
// v15 = .object(ofGroup: Object, withProperties: ["d", "length", "__proto__", "valueOf", "e"])
let v16 = v15;
function v19(v20,v21) {
    const v22 = v20 in v19;
    // v22 = .boolean
    const v28 = [3156875969,3156875969,1337,DataView];
    // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v29 = {constructor:v28,c:v28,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v29 = .object(ofGroup: Object, withProperties: ["constructor", "a", "c", "e", "__proto__", "d"])
    const v30 = {e:DataView,constructor:1337,valueOf:1337,d:v28};
    // v30 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "valueOf", "d", "constructor"])
    for (let v35 = 0; v35 < 10; v35++) {
    }
    const v37 = [1337];
    // v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v40 = 0;
    let v43 = 0;
    do {
        try {
            let v46 = 0;
            do {
                const v47 = v46 + 1;
                // v47 = .primitive
                const v48 = {constructor:3156875969,...v47,...8};
                // v48 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
                v16 = v28;
                const v49 = [v47,v47,3];
                // v49 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
                v46 = v47;
            } while (v46 < 7);
        } catch(v50) {
            let v53 = 0;
            for (let v57 = 0; v57 < 0; v57++) {
            }
        }
        const v61 = v43 + 1;
        // v61 = .primitive
        v43 = v61;
    } while (v43 < 8);
    do {
        const v62 = v40 + 1;
        // v62 = .primitive
        v40 = v62;
    } while (v40 < 3);
    for (const v64 in "object") {
    }
}
const v66 = [1337];
// v66 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v67 = v66;
const v68 = v19(v67);
// v68 = .unknown
const v69 = v19(1024,4.0);
// v69 = .unknown
const v70 = v19(v69,v67);
// v70 = .unknown
}
%NeverOptimizeFunction(main);
main();
