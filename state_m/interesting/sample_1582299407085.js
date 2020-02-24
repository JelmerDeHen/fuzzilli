function main() {
let v1 = RegExp;
let v2 = v1;
const v5 = new Proxy(v2,Object);
// v5 = .unknown
const v6 = Object.isSealed(v5);
// v6 = .boolean
}
%NeverOptimizeFunction(main);
main();
