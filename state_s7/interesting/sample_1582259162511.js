function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v10 = {length:"N0Xx92zvHQ"};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v11 = {constructor:13.37,length:13.37,__proto__:v10,toString:Number,a:"N0Xx92zvHQ"};
// v11 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__"], withMethods: ["toString"])
let v15 = 0;
const v16 = v11.__proto__;
// v16 = .object()
const v17 = v16 + 1;
// v17 = .primitive
v15 = v17;
const v19 = new Promise(Promise);
// v19 = .object()
const v22 = gc();
// v22 = .undefined
const v25 = gc();
// v25 = .undefined
}
%NeverOptimizeFunction(main);
main();
