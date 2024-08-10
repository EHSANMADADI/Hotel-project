export interface Reserves {
    coffeeShopReserves: {
      check_in_hour: string;
      check_out_hour: string;
      date: string;
      id: number;
      status: string;
      coffee_shop_table_id: number;
      number_of_guest: string;
    }[];
  }