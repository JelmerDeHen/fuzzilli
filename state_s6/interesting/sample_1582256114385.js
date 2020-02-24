function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [1337,v4];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {a:eval,length:1337};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["a"])
const v9 = {b:v7,a:v7,__proto__:v7};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "a"])
let v10 = eval;
let v13 = 0;
do {
    const v14 = v13 + 1;
    // v14 = .primitive
    function v15(v16,v17) {
        for (let v22 = 0; v22 < 10; v22++) {
            function v23(v24,v25) {
                for (const v27 in "boolean") {
                    let v30 = 0;
                    let v33 = 0;
                    const v34 = v33 + 1;
                    // v34 = .primitive
                    v33 = v34;
                    const v35 = v30 + 1;
                    // v35 = .primitive
                    const v36 = {getOwnPropertyDescriptor:v23,has:v10};
                    // v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "has"])
                    const v38 = new Proxy(v23,v36);
                    // v38 = .unknown
                    function v39(v40,v41,v42,v43) {
                        const v44 = v23(v6);
                        // v44 = .unknown
                        return v22;
                    }
                    let v47 = 0;
                    do {
                        let v48 = v27;
                        try {
                            const v50 = {set:v23,get:v39};
                            // v50 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
                            const v52 = Object.defineProperty(v36,"getOwnPropertyDescriptor",v50);
                            // v52 = .undefined
                            v48 = "getOwnPropertyDescriptor";
                        } catch(v53) {
                            const v54 = v16[-608261020];
                            // v54 = .unknown
                            v48 = v23;
                        }
                        const v55 = v47 + 1;
                        // v55 = .primitive
                        v47 = v55;
                    } while (v47 < 10);
                    v30 = v35;
                }
                return v14;
            }
            const v57 = [1337];
            // v57 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            let v58 = v57;
            const v59 = v23(v58);
            // v59 = .unknown
        }
        let v62 = 0;
        let v65 = 0;
        let v68 = 0;
        const v69 = v68 + 1;
        // v69 = .primitive
        v68 = v69;
        let v75 = 0;
        let v78 = 0;
        const v79 = v65 + 1;
        // v79 = .primitive
        v65 = v79;
        const v80 = v62 + 1;
        // v80 = .primitive
        function v81(v82,v83) {
            for (let v88 = 0; v88 < 10; v88 = v88 + 3828756786) {
            }
            let v91 = 9007199254740992;
            let v94 = 0;
            let v97 = 0;
            const v98 = v97 + 1;
            // v98 = .primitive
            v97 = v98;
            const v99 = v94 + 1;
            // v99 = .primitive
            v94 = v99;
            return v83;
        }
        const v101 = [1337];
        // v101 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v102 = v101;
        const v103 = v81(v102);
        // v103 = .unknown
        const v105 = v81(1);
        // v105 = .unknown
        v62 = v80;
        return 13.37;
    }
    const v108 = [1337];
    // v108 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v109 = v108;
    const v110 = v15(v109);
    // v110 = .unknown
    v13 = v14;
} while (v13 < 7);
}
%NeverOptimizeFunction(main);
main();
