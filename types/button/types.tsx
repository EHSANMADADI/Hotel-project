export default interface ButtonImpl {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
  onClick?(): void;
}
