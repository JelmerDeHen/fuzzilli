function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {valueOf:v7,length:13.37,d:127,e:127};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "length", "valueOf"])
const v9 = {c:v7,valueOf:v8,d:Array,a:1337};
// v9 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "valueOf", "c"], withMethods: ["d"])
let v10 = v8;
function v20(v21,v22) {
    const v23 = v21 in v20;
    // v23 = .boolean
    const v29 = [3156875969,3156875969,1337,DataView];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v30 = {constructor:v29,c:v29,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v30 = .object(ofGroup: Object, withProperties: ["a", "c", "constructor", "d", "__proto__", "e"])
    const v31 = {e:DataView,constructor:1337,valueOf:1337,d:v29};
    // v31 = .object(ofGroup: Object, withProperties: ["constructor", "e", "valueOf", "d", "__proto__"])
    for (let v44 = 0; v44 < 10; v44++) {
    }
    let v53 = 0;
    for (const v54 in "boolean") {
        let v57 = 0;
        do {
            try {
                let v60 = 0;
                const v62 = [1337,1337,1337,1337];
                // v62 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                const v64 = Object.freeze(v62);
                // v64 = .undefined
                do {
                    const v66 = v60 + 1;
                    // v66 = .primitive
                    v60 = v66;
                } while (v60 < 7);
            } catch(v67) {
                let v70 = 0;
                while (v70 < 10) {
                    for (let v74 = 0; v74 < 0; v74++) {
                    }
                }
                try {
                } catch(v75) {
                }
            }
            const v76 = v57 + 1;
            // v76 = .primitive
            v57 = v76;
        } while (v57 < 8);
    }
    do {
        const v77 = v53 + 1;
        // v77 = .primitive
        v53 = v77;
    } while (v53 < 3);
    for (const v83 in "object") {
    }
    return 3156875969;
}
const v97 = [1337];
// v97 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v99 = v97;
const v109 = v20(v99);
// v109 = .unknown
}
%NeverOptimizeFunction(main);
main();