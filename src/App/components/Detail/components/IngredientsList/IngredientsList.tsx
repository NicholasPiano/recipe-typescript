
import React, { FunctionComponent, Fragment } from 'react';
import { Header, List, Icon } from 'semantic-ui-react';

type IngredientsListProps = {
  ingredients?: string,
}

const IngredientsList:FunctionComponent<IngredientsListProps> = ({ ingredients }) => {
  if (!ingredients) {
    return null;
  }

  return (
    <Fragment>
      <Header as="h4">Ingredients</Header>
      <List>
        {ingredients.split(',').map((ingredient, index) => (
          <List.Item key={`${ingredient}${index}`}>
            <Icon name="caret right" />
            <List.Content>{ingredient}</List.Content>
          </List.Item>
        ))}
      </List>
    </Fragment>
  );
};

export default IngredientsList;
