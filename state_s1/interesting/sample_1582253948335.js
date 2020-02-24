function main() {
const v3 = {length:"N0Xx92zvHQ"};
// v3 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v4 = {constructor:13.37,length:13.37,__proto__:v3,toString:Number,a:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "a", "constructor"], withMethods: ["toString"])
let v5 = v4;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v12 = {c:13.37};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v13 = {c:v12,length:v5};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "c"])
v3.__proto__ = v13;
}
%NeverOptimizeFunction(main);
main();
