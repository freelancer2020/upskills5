const resolvers = {
  test(obj) {
    return "test";
  },
  claimAllData(obj) {
    const destrObject = { ...obj.data };
    return "Data has been recevied";
  },
};

export default resolvers;
