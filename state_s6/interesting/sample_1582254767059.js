function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [13.37,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v9 = {d:gc,valueOf:v6};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
let v10 = 1337;
function v20(v21,v22) {
    const v23 = v21 in v20;
    // v23 = .boolean
    const v29 = [3156875969,3156875969,1337,DataView];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v30 = {constructor:v29,c:v29,e:5.0,d:1337,a:3156875969,__proto__:"boolean"};
    // v30 = .object(ofGroup: Object, withProperties: ["constructor", "d", "a", "__proto__", "e", "c"])
    const v31 = {e:DataView,constructor:1337,valueOf:1337,d:v29};
    // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "constructor", "e", "d"])
    for (let v44 = 0; v44 < 10; v44++) {
    }
    let v53 = 0;
    for (const v54 in "boolean") {
        let v57 = 0;
        do {
            try {
                let v60 = 0;
                v29.__proto__ = v60;
                do {
                    const v61 = v60 + 1;
                    // v61 = .primitive
                    v60 = v61;
                } while (v60 < 7);
            } catch(v62) {
                let v65 = 0;
                while (v65 < 10) {
                    for (let v69 = 0; v69 < 0; v69++) {
                    }
                }
                v29.__proto__ = v62;
                const v70 = v62.copyWithin(13.37,v65,v6,v62);
                // v70 = .unknown
                const v71 = Object(v62,8,v65,v30);
                // v71 = .object()
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
    for (const v80 in 0) {
    }
    return 0;
}
const v94 = [1337];
// v94 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v96 = v94;
const v105 = v20(v96);
// v105 = .unknown
}
%NeverOptimizeFunction(main);
main();
