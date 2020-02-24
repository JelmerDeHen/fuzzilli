function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {length:v5,a:v3,toString:v3,b:Int8Array,e:1337,constructor:-274804284};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "toString", "a", "length", "e", "b"])
function v9(v10,v11) {
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            try {
                let v20 = 0;
                do {
                    const v21 = [v17,7];
                    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                    const v22 = {a:v14,c:v21,valueOf:v20,constructor:0,b:"N0Xx92zvHQ"};
                    // v22 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__", "valueOf", "constructor", "c"])
                    const v24 = {set:v11};
                    // v24 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
                    v6.length = 1;
                    const v27 = Object.defineProperty(v22,"d",v24);
                    // v27 = .undefined
                } while (v20 < 7);
            } catch(v28) {
            }
            function v30(v31,v32) {
            }
            const v33 = [1337];
            // v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            let v34 = v33;
            const v35 = v30(v34);
            // v35 = .unknown
            const v36 = v17 + 1;
            // v36 = .primitive
            v17 = v36;
        } while (v17 < 8);
    }
}
const v38 = v9(1024,4.0);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
