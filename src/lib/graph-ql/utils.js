export const filterById = (id) => {
  return id ? `_by_id(id:${id})` : '';
};