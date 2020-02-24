function main() {
const v3 = {length:"N0Xx92zvHQ"};
// v3 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v4 = {constructor:13.37,length:13.37,__proto__:v3,length:Number,a:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "a"], withMethods: ["length"])
let v5 = v4;
const v7 = {__proto__:Number};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["__proto__"])
const v9 = Object.defineProperty(v5,"b",v7);
// v9 = .undefined
let v12 = 0;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
const v17 = v12 + 1;
// v17 = .primitive
v12 = v17;
}
%NeverOptimizeFunction(main);
main();
