export interface IAplicationState {
  loading: boolean;
  items: ListItems;
}

export type item = {
  id: number;
  width: number;
  height: number;
  urls: {large: string; regular: string; raw: string; small: string};
  color: string | null;
  description: string;
  user: {
    username: string;
    name: string;
  };
};

export type ListItems = Array<item>;

export type Payload = {
  type: string;
  payload: any;
};
