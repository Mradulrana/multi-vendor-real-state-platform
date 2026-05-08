export interface Property {
  id: string | number;
  title: string;
  location: string;
  price: string;
  pricePerSqft?: string;
  area: string;
  verified: boolean;
  newLaunch: boolean;
  image: string;
  gallery?: string[];
  description?: string;
  highlights?: {
    facing?: string;
    openSides?: number;
    transactionType?: string;
    boundaryWall?: boolean;
    cornerPlot?: boolean;
  };
}

export interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  role: 'buyer' | 'seller';
  savedProperties: Property[];
  contactedListings: Property[];
}
