export default interface ModalImpl extends UseModalImpl {
  children: React.ReactNode;
  className?: string;
}

export interface UseModalImpl {
  open: boolean;
  setOpen(open: boolean): void;
}
