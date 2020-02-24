function main() {
let v1 = Promise;
let v2 = v1;
const v5 = new Proxy(v2,Object);
// v5 = .unknown
const v6 = Object.freeze(v5);
// v6 = .undefined
}
%NeverOptimizeFunction(main);
main();
