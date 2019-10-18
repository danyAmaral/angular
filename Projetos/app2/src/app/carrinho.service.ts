import {ItemCarrinho} from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model';
export class CarrinhoService{
    protected itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[]{
        return this.itens;
    }

    public incluirItem(oferta: Oferta): void{
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
             oferta.id,
             oferta.imagens[0],
             oferta.titulo,
             oferta.descricao_oferta,
             oferta.valor,
             1       
        )

        let itemExistente = this.itens.find((item: ItemCarrinho) => item.id == oferta.id);
        if(itemExistente)
            itemExistente.quantidade++;
        else    
            this.itens.push(itemCarrinho);
    }

    public totalCarrinhoCompras():number{
        let total: number = 0;

        this.itens.map((item: ItemCarrinho) => {
            total += item.valor * item.quantidade
        });

        return total;
    }

    public adicionarQuantidade(itemCarrinho: ItemCarrinho): void{
        let itemExistente = this.itens.find((item: ItemCarrinho) => item.id == itemCarrinho.id);
        if(itemExistente)
            itemExistente.quantidade++;

    }

    public removerQuantidade(itemCarrinho: ItemCarrinho): void{
        let itemExistente = this.itens.find((item: ItemCarrinho) => item.id == itemCarrinho.id);
        if(itemExistente){
            itemExistente.quantidade--;

            if(itemExistente.quantidade == 0){
                this.itens.splice(this.itens.indexOf(itemExistente), 1); 
            }
        }
    }

    public limparCarrinho(): void{
        this.itens = [];
    }
}