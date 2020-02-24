function main() {
let v2 = Promise;
let v3 = v2;
const v6 = new Proxy(v3,Object);
// v6 = .unknown
const v7 = Object.freeze(v6);
// v7 = .undefined
}
%NeverOptimizeFunction(main);
main();
