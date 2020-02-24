function main() {
const v3 = {length:"N0Xx92zvHQ"};
// v3 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v4 = {constructor:13.37,length:13.37,__proto__:v3,toString:Number,a:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["a", "length", "constructor", "__proto__"], withMethods: ["toString"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
v4.e = 13.37;
}
%NeverOptimizeFunction(main);
main();
