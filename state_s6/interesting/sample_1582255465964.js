function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = ["undefined",13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:2147483647};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v9 = {__proto__:Uint8Array,a:v8,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "d", "__proto__", "a", "valueOf", "b"])
let v10 = Uint8Array;
function v20(v21,v22) {
    const v23 = v21 in v20;
    // v23 = .boolean
    const v29 = [3156875969,3156875969,1337,DataView];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v30 = {constructor:v29,c:v29,e:13.37,d:1337,a:3156875969,__proto__:"boolean"};
    // v30 = .object(ofGroup: Object, withProperties: ["c", "d", "__proto__", "constructor", "e", "a"])
    const v31 = {e:DataView,constructor:1337,valueOf:1337,d:v29};
    // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d", "e", "constructor"])
    for (let v44 = 0; v44 < 10; v44++) {
    }
    let v53 = 0;
    for (const v54 in "boolean") {
        let v57 = 0;
        do {
            try {
                let v60 = 0;
                do {
                    const v61 = v60 + 1;
                    // v61 = .primitive
                    v60 = v61;
                } while (v60 < 7);
                v31.__proto__ = 13.37;
                let v62 = 0;
                let v63 = 13.37;
            } catch(v64) {
                let v67 = 0;
                while (v67 < 10) {
                    for (let v71 = 0; v71 < 0; v71++) {
                    }
                }
                try {
                } catch(v72) {
                }
            }
            const v73 = v57 + 1;
            // v73 = .primitive
            v57 = v73;
        } while (v57 < 8);
    }
    do {
        const v74 = v53 + 1;
        // v74 = .primitive
        v53 = v74;
    } while (v53 < 3);
    for (const v80 in "object") {
    }
    return 1;
}
const v94 = [1337];
// v94 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v96 = v94;
const v106 = v20(v96);
// v106 = .unknown
}
%NeverOptimizeFunction(main);
main();
