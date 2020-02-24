function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = {length:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
v7.a = v5;
const v8 = v7[-2147483649];
// v8 = .unknown
const v9 = {constructor:13.37,length:13.37,__proto__:v7,toString:Number,a:"N0Xx92zvHQ"};
// v9 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "a"], withMethods: ["toString"])
for (const v11 in v7) {
}
}
%NeverOptimizeFunction(main);
main();
