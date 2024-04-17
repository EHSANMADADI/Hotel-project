export default interface PrimaryCardImpl {
  id:Number;
  children: React.ReactNode;
  title: React.ReactNode;
  label: React.ReactNode;
  image: string;
  layer?: boolean;
  active?: boolean;
}
