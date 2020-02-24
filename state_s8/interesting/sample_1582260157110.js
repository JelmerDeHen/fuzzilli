function main() {
const v2 = Symbol.__proto__;
// v2 = .unknown
let v3 = v2;
const v4 = v2(-2,v3);
// v4 = .unknown
}
%NeverOptimizeFunction(main);
main();
