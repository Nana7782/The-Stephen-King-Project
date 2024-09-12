interface IKing {
  data: IBooks[];
}

export interface IBooks {
  id: number;
  year: number;
  title: string;
  handle?: string;
  publisher?: string;
  isbn?: string;
  pages: number;
  notes: string[];
  createdAt?: Date;
  villains?: Villain[];
}

interface Villain {
  name: string;
  url: string;
}

export interface IDetails extends IBooks {
  id: number;
  description: string;
  cover: string;
}
