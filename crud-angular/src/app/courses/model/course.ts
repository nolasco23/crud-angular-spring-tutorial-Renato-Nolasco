export interface ICourse {
  _id: string;
  name: string;
  category: string;
}

export class Course implements ICourse {
  public _id: string;
  public name: string;
  public category: string;

  constructor(_id: string, name: string, category: string) {
    this._id = _id;
    this.name = name;
    this.category = category;
  }
}
