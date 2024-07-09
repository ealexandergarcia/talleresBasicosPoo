export class Figura {
    constructor(color, area) {
      this.color = color;
      this.area = area;
    }
  
    calcularArea() {
      return `El área de la figura es: ${this.area}`;
    }
  }
  
  export class Circulo extends Figura {
    constructor(color, radio) {
      super(color, 0);
      this.radio = radio;
    }
  
    calcularArea() {
      return `El área del círculo es: ${Math.PI * (this.radio ** 2)}`;
    }
  }
  
  export class Rectangulo extends Figura {
    constructor(color, largo, ancho) {
      super(color, 0);
      this.largo = largo;
      this.ancho = ancho;
    }
  
    calcularArea() {
      return `El área del rectángulo es: ${this.largo * this.ancho}`;
    }
  }