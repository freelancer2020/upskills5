const resolvers = {
  test() {
    return {
      name: "Mostafa",
      age: 36,
    };
  },
  makeTest(obj) {
    console.log(obj.data.name);
    if (obj.data.name === "Mostafa") {
      return "Master graphQL";
    } else {
      return "In The Way";
    }
  },
  claimPersonalData(obj) {
    console.log(obj)
  }
};

export default resolvers;
