function main() {
const v6 = {length:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v7 = {constructor:13.37,length:13.37,__proto__:v6,toString:Number,a:"N0Xx92zvHQ"};
// v7 = .object(ofGroup: Object, withProperties: ["length", "constructor", "a", "__proto__"], withMethods: ["toString"])
let v8 = v7;
for (const v10 in "object") {
    const v12 = Symbol.match;
    // v12 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    v8[v12] = v10;
}
}
%NeverOptimizeFunction(main);
main();
