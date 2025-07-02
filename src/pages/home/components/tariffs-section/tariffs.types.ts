export interface FeatureDescription {
  name: string;
  active: boolean;
}

export interface FeatureGroup {
  title: string;
  description: FeatureDescription[];
}

export interface Tariff {
  name: string;
  price: string;
  features: FeatureGroup[];
  badge: string;
  highlight: boolean;
}
