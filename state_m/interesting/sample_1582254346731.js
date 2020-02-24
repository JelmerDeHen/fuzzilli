function main() {
let v7 = 0;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v13 = "iterator"[-4226443050];
// v13 = .unknown
const v14 = this.__proto__;
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();
