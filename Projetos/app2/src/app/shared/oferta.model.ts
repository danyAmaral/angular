export class Oferta{
    public id: number
    public titulo: string
    public categoria: string
    public descricao_oferta: string
    public anunciante: string
    public valor: number
    public destaque: boolean
    public imagens: Array<object>
}