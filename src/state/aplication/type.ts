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
  likes: number;
  description: string;
  user: {
    username: string;
    name: string;
    profile_image: {large: string; medium: string; small: string};
  };
};

export type ListItems = Array<item>;

export type Payload = {
  type: string;
  payload: any;
};
