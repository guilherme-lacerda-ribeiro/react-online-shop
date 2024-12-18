import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer } from "@/reducers/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho" // extensao do chrome React Context

const estadoInicial = []

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial)
  const [quantidade, setQuantidade] = useState(0)
  const [valorTotal, setValorTotal] = useState(0)

  const { totalTemp, qtdTemp } = useMemo(() => {
    return carrinho.reduce(
      (acumulador, produto) => ({
        qtdTemp: acumulador.qtdTemp + produto.quantidade,
        totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
      }),
      {
        qtdTemp: 0,
        totalTemp: 0,
      }
    );
  }, [carrinho]);

  // no useEffect, o [carrinho] estava lá mas agora o useMemo já faz isso gerindo as alterações
  useEffect(() => {
    setQuantidade(qtdTemp);
    setValorTotal(totalTemp);
  });


  return (
    <CarrinhoContext.Provider value={{
      carrinho,
      dispatch,
      quantidade,
      valorTotal,
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
