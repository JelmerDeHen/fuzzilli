function main() {
const v3 = {length:"N0Xx92zvHQ"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v4 = {constructor:13.37,length:13.37,__proto__:v3,toString:Number,a:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor"], withMethods: ["toString"])
const v7 = {set:Number};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v9 = Object.defineProperty(v3,"valueOf",v7);
// v9 = .undefined
const v11 = {c:13.37};
// v11 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
let v14 = 0;
const v15 = v14 + 1;
// v15 = .primitive
v14 = v15;
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
}
%NeverOptimizeFunction(main);
main();
