function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v3(v4,v5) {
    const v11 = [3156875969,3156875969,1337,DataView];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v12 = {constructor:v11,c:v11,e:5.0,d:1337,a:3156875969,__proto__:"boolean"};
    // v12 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "a", "constructor", "c", "e"])
    let v20 = 0;
    for (const v21 in "boolean") {
        let v24 = 0;
        do {
            try {
                let v27 = 0;
                v11.__proto__ = v27;
                do {
                    const v28 = v27 + 1;
                    // v28 = .primitive
                    v27 = v28;
                } while (v27 < 7);
            } catch(v29) {
                let v32 = 0;
                while (v32 < 10) {
                }
                const v36 = v29.copyWithin(13.37,v32,v2,v29);
                // v36 = .unknown
                const v37 = Object(v29,v21,v32,v12);
                // v37 = .object()
            }
            const v38 = v24 + 1;
            // v38 = .primitive
            v24 = v38;
        } while (v24 < 8);
    }
    do {
        const v39 = v20 + 1;
        // v39 = .primitive
        v20 = v39;
    } while (v20 < 3);
    for (const v40 in 0) {
    }
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v43 = v42;
const v44 = v3(v43);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
