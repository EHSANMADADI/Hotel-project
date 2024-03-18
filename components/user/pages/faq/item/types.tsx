export default interface FAQItemImpl extends UseFAQItemImpl {
  title: string;
  desc: string;
}

export interface UseFAQItemImpl {
  open?: boolean;
}
