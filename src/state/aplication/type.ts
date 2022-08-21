export interface IAplicationState {
  loading: boolean;
  items: ListItems;
  profileItems: ListItems;
}

export type item = {
  id: number;
  width: number;
  height: number;
  urls: {large: string; regular: string; raw: string; small: string};
  color: string | null;
  likes: number;
  description: string;
  index?: number;
  user: {
    bio: string;
    username: string;
    name: string;
    links: {photos: string};
    profile_image: {large: string; medium: string; small: string};
  };
};

export type ListItems = Array<item>;

export type Payload = {
  type: string;
  payload: any;
};
