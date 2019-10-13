import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;
  public formEstado: string = 'disabled'
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    this.ordemCompraService.efetivarCompra();
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;
    this.enderecoValido = this.endereco.length > 3;
    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    this.numeroValido = this.numero.length > 0
    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;
    if (this.complemento.length > 0)
      this.complementoValido = true;

    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    this.formaPagamentoValido = this.formaPagamento.length > 0;
    this.habilitaForm();
  }

  public habilitaForm(): void {
    if(this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true)
    {
      this.formEstado = '';
    }else{
      this.formEstado = 'disabled';
    }
  }

}
