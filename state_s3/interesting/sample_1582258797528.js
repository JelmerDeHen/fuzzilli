function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
            const v17 = [1337];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v18 = {b:v17,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
            // v18 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "e", "a", "__proto__"])
            const v19 = v17.concat(v18,"iterator",Uint16Array,4294967297);
            // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v20 = v19.__proto__;
            // v20 = .object()
            let v29 = 0;
            const v30 = v29 + 1;
            // v30 = .primitive
            v29 = v30;
            let v33 = v20;
            const v34 = v33 + 1;
            // v34 = .primitive
            v33 = v34;
            const v35 = v19.filter(gc);
            // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v36 = v7 + 1;
            // v36 = .primitive
            v7 = v36;
        } while (v7 < 8);
    }
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v39 = v38;
const v40 = v0(v39);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();