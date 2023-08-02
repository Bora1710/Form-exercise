export interface IUser {
  name: string;
  gender: string;
  date: Date;
  age: number;
  contact: {
    phone: string;
  };
  email: string;
  password: string;
  passwordRepeat: string;
  hobies: [
    {
      hobyName: string;
    }
  ];
}

export class User implements IUser {
    name: string;
  gender: string;
  date: Date;
  age: number;
  contact: {
    phone: string;
  };
  email: string;
  password: string;
  passwordRepeat: string;
  hobies: [
    {
      hobyName: string;
    }
]

    constructor(user: IUser) {
        this.name = user.name || '';
        this.gender = user.gender || '';
        this.date = user.date || null;
        this.age = user.age || 0;
        this.contact = user.contact || '';
        this.email = user.email || '';
        this.password = user.password || '';
        this.passwordRepeat = user.email || '';
        this.hobies = user.hobies || null;
        
    }
}


