import _ from "lodash";

const ArrayEx = () => {
  const _ = require("lodash");

  //Question 2A
  const arrOne = [
    {
      id: 20,
      name: "alex",
    },
    {
      id: 30,
      name: "alina",
    },
  ];
  const arrTwo = [
    {
      id: 40,
      name: "hello",
    },
    {
      id: 30,
      name: "world",
    },
  ];
  const symDiff = _.xorBy(arrOne, arrTwo, "id");
  console.log("Question 2A: ", symDiff);

  const sameId = (a, b) => {
    return a.id == b.id;
  };
  const similar = _.intersectionWith(
    _.unionWith(arrOne, arrTwo, sameId),
    arrTwo,
    sameId
  );
  console.log("Question 2A: ", similar);

  //Question 2B
  const str = ["u", "ec"];
  const arr = [
    {
      storageVal: "u",
      table: ["E", "F"],
    },
    {
      storageVal: "data",
      id: 3,
    },
    {
      storageVal: "ec",
      table: ["E"],
    },
  ];
  const result = _.filter(arr, ({ storageVal }) => _.includes(str, storageVal));
  console.log("Question 2B: ", result);

  //Question 2C
  const a = [["E"], ["F"]];
  const newArray = _.flatten(a);
  console.log("Question 2C: ", newArray);

  //Question 2D
  const t = [
    ["E", "F"],
    [["F"], ["G"]],
  ];
  const flatArray = _.uniq(_.flattenDeep(t));
  console.log("Question 2D: ", flatArray);

  return null;
};

export default ArrayEx;
