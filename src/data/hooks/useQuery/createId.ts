
import forge from 'node-forge';

type createIdType = {
  query: string | null,
  ingredients: Array<string>,
  page: number,
};

const createId = ({ query, ingredients, page }: createIdType) => {
  const sortedIngredients = ingredients.sort((a, b) => {
    if (a > b) {
      return 1;
    }

    return -1;
  });
  const ingredientsString = sortedIngredients.join(',');
  const digestableString = `${query}.${ingredientsString}.${page}`;
  const digest = forge.md.sha256.create().update(digestableString).digest().toHex();

  return digest;
};

export default createId;
