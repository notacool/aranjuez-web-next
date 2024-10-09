export interface Route {
  routeId: number;
  url: string;
  title: string;
  description: Array<string>;
  to: string;
  imageUrl: string;
  videoUrl: string;
  introduction: Array<string>;
  videoDescription: Array<string>;
  mapUrl: string;
}

export interface InterestingSites {
  routeId: Array<number>;
  name: string;
  description: Array<string>;
  introduction: string;
  image: string;
  url: string;
  mapUrl: string;
}
