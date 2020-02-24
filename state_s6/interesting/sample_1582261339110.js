function main() {
const v2 = "undefined".__proto__;
// v2 = .object()
let v13 = 0;
let v16 = 0;
let v19 = 0;
const v23 = v2.lastIndexOf();
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
