function main() {
const v2 = {constructor:"symbol",length:"symbol"};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
let v14 = 0;
let v17 = 0;
let v20 = 0;
let v23 = 0;
delete v2.constructor;
const v31 = Reflect.preventExtensions(v2);
// v31 = .boolean
}
%NeverOptimizeFunction(main);
main();
