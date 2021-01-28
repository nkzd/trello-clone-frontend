const reorder = (cards, startIndex, endIndex) => {
  const result = Array.from(cards);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  source,
  destination,
  { sourceId, sourceIndex },
  { destinationId, destinationIndex }
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(sourceIndex, 1);

  destClone.splice(destinationIndex, 0, removed);

  const result = {};
  result[sourceId] = sourceClone;
  result[destinationId] = destClone;

  return result;
};

export { reorder, move };
