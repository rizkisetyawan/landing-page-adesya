export const getHome = () => {
  const query = `*[_type == "home"]`;

  return query;
};
