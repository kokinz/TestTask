const getIndexById = (id, array) => {
  return array.findIndex((element) => {
    return element.id === id;
  });
}

export {getIndexById};
