export class Recipe {
  // name: string;
  // description: string;
  // imagePath: string;

  constructor(public name: string, public description: string, public imagePath: string) {
    this.name = name
    this.description = description
    this.imagePath = imagePath
  }
}