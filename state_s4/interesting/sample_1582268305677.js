function main() {
const v3 = {length:"N0Xx92zvHQ"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v4 = {constructor:13.37,length:13.37,__proto__:v3,toString:Number,a:"N0Xx92zvHQ"};
// v4 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "constructor"], withMethods: ["toString"])
let v5 = v4;
v5[1785333916] = v4;
delete v5.a;
}
%NeverOptimizeFunction(main);
main();
