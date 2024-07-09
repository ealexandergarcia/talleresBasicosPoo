export class Empleado {
    constructor(nombre, edad,sueldo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
    }

    calcularSalarioAnual() {
        let salario = this.sueldo *12;
        console.log(`El empleado ${this.nombre} tiene un sueldo mensual de ${this.sueldo} y un salario anual de ${salario}`);
        
    }
}

export class Gerente extends Empleado{
    constructor(nombre, edad, sueldo, departamento) {
        super(nombre, edad, sueldo);
        this.departamento = departamento;
    }
    calcularSalarioAnual(){
        let sueldoMasBono = this.sueldo+ (this.sueldo * 0.12)
        let salario = sueldoMasBono * 12;
        console.log(`El empleado ${this.nombre} tiene un sueldo mensual msa bono de ${sueldoMasBono} y un salario anual de ${salario.toFixed(2)}`);
    }
}