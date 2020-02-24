function main() {
let v4 = 387483673;
const v7 = {valueOf:"string",length:13.37,d:127,e:127};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "d", "e"])
let v8 = v7;
const v9 = v8[3];
// v9 = .unknown
let v11 = Promise;
let v12 = v11;
const v15 = new Proxy(v12,Object);
// v15 = .unknown
const v16 = Object.freeze(v15);
// v16 = .undefined
}
%NeverOptimizeFunction(main);
main();
