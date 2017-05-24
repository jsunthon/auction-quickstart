export class Review {
  constructor(public id: number,
              public dateCreated: string,
              public rating: number,
              public comment: string,
              public user: string) {
  }
}
