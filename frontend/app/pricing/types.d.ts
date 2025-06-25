interface Package {
  title: string;
  price: number;
  features: string[];
  popular?: boolean;
  path: string;
}

interface Packages {
  Academic: Package[];
  Outbound: Package[];
  Entrepreneurial: Package[];
}
