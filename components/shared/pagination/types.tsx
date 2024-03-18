export default interface PginationImpl {
  items: number;
  perPage: number;
  onClick(itemOffset: number, endOffset: number): void;
}
