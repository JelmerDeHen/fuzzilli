function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [Number,v6,13.37,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {b:13.37,d:-256,c:Number,constructor:"MIN_VALUE",valueOf:-256,length:1337,e:-256};
// v8 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "e", "d", "b", "constructor"], withMethods: ["c"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = "MIN_VALUE";
for (const v12 in v8) {
    function v14(v15,v16) {
        const v17 = v15 in v14;
        // v17 = .boolean
        const v19 = [13.37,13.37,13.37,13.37,13.37];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        Number[4294967295] = v19;
        const v23 = [13.37,13.37,13.37,13.37,13.37];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v24 = v23;
        Number.__proto__ = v24;
        let v32 = 0;
        for (const v33 in "boolean") {
            let v36 = 0;
            do {
                let v39 = 0;
                do {
                    const v40 = v39 + 1;
                    // v40 = .primitive
                    v39 = v15;
                } while (v39 < 7);
                let v43 = 0;
                const v46 = v36 + 1;
                // v46 = .primitive
                v36 = v46;
            } while (v36 < 8);
        }
        const v47 = v32 + 1;
        // v47 = .primitive
        v32 = v47;
        return v12;
    }
    const v49 = v14("undefined",4.0);
    // v49 = .unknown
    for (const v51 in "boolean") {
        let v54 = 0;
        do {
            function v55(v56,v57) {
            }
            const v60 = v54 + 1;
            // v60 = .primitive
            v54 = v60;
        } while (v54 < 8);
    }
}
const v63 = [1337,1337,"MIN_VALUE"];
// v63 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();
