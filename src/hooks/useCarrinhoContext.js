import { useContext } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext.jsx";
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_PRODUTO } from "@/reducers/carrinhoReducer";

const addProdutoAction = (novoProduto) => ({
  type: ADD_PRODUTO,
  payload: novoProduto,
});

const removeProdutoAction = (produtoId) => ({
  type: REMOVE_PRODUTO,
  payload: produtoId,
});

const updateQuantidadeAction = (produtoId, quantidade) => ({
  type: UPDATE_PRODUTO,
  payload: { produtoId, quantidade },
});

export const useCarrinhoContext = () => {
  const { carrinho, dispatch, quantidade, valorTotal } = useContext(CarrinhoContext);

  function adicionarProduto(novoProduto) {
    dispatch(addProdutoAction(novoProduto));
  }

  function removerProduto(id) {
    const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);

    if (produto && produto.quantidade > 1) {
      dispatch(updateQuantidadeAction(id, produto.quantidade - 1));
    } else {
      dispatch(removeProdutoAction(id));
    }
  }

  function removerProdutoCarrinho(id) {
    dispatch(removeProdutoAction(id));
  }

  return {
    carrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    quantidade,
    valorTotal,
  };
};
