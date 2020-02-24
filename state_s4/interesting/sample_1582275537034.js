function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [1135606097,1135606097,"IVfnMTF4eH",13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {valueOf:13.37,b:v4,e:JSON,constructor:JSON,a:JSON,length:"IVfnMTF4eH"};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "e", "length", "a", "constructor"])
let v10 = v7;
const v15 = [1337,1337,1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
v6.__proto__ = v4;
with ("symbol") {
    let v26 = 0;
    do {
        const v27 = typeof 1337;
        // v27 = .string
        const v29 = v27 === "symbol";
        // v29 = .boolean
        const v30 = v26 + 1;
        // v30 = .primitive
        v26 = v30;
    } while (v26 < 2);
}
let v33 = "symbol";
const v34 = {isExtensible:Array,ownKeys:v33};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys"], withMethods: ["isExtensible"])
const v36 = new Proxy(WeakSet,v34);
// v36 = .unknown
const v37 = [];
// v37 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v38 = {valueOf:v37,length:13.37,d:127,e:127};
// v38 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "e", "d", "__proto__"])
const v39 = {c:v37,valueOf:v38,d:Array,a:1337};
// v39 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "valueOf", "a"], withMethods: ["d"])
const v42 = v15 != v39;
// v42 = .boolean
let v45 = 0;
const v46 = v45 + 1;
// v46 = .primitive
v33 = v46;
const v50 = [];
// v50 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v51 = {valueOf:Array,length:13.37,d:127,e:127};
// v51 = .object(ofGroup: Object, withProperties: ["length", "d", "e", "__proto__"], withMethods: ["valueOf"])
const v52 = {c:v50,valueOf:v51,d:Array,a:1337};
// v52 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c", "a"], withMethods: ["d"])
const v53 = Reflect.set(v52,v36);
// v53 = .boolean
let v57 = 0;
const v58 = v57 + 1;
// v58 = .primitive
v57 = v58;
let v62 = 0;
Reflect[v38] = v53;
for (let v69 = 0; v69 < 0; v69++) {
    JSON.valueOf = Array;
}
v4[-128] = v19;
const v70 = Array(v45);
// v70 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
}
%NeverOptimizeFunction(main);
main();
