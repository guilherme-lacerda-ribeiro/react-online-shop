export const ADD_PRODUTO = "ADD_PRODUTO";
export const REMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_PRODUTO = "UPDATE_PRODUTO";

// state é o carrinho
// action tem o tipo e o payload que são os dados mesmo pra trabalhar
export const carrinhoReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUTO:
      const novoProduto = action.payload;
      const produtoIndiceNoArray = state.findIndex((item) => item.id === novoProduto.id);

      if (produtoIndiceNoArray === -1) {
        // nao tem o produto no carrinho
        novoProduto.quantidade = 1;
        return [...state, novoProduto];
      }

      // produto ja tem no carrinho, incrementa a quantidade
      return state.map((item, index) => (index === produtoIndiceNoArray ? { ...item, quantidade: item.quantidade + 1 } : item));

    case REMOVE_PRODUTO:
      const produtoId = action.payload;
      return state.filter((item) => item.id !== produtoId);

    case UPDATE_PRODUTO:
      const { produtoId: id, quantidade } = action.payload;
      return state.map((item) => (item.id === id ? { ...item, quantidade } : item));

    default:
      return state;
  }
};
