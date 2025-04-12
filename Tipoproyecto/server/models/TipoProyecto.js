class TipoProyecto {
    constructor(id, codigo, descripcion, abreviatura, fecha_registro) {
      this.id = id;
      this.codigo = codigo; //nombre
      this.descripcion = descripcion; //documento
      this.abreviatura = abreviatura; //fecha_ingreso 
      this.fecha_registro = fecha_registro; //fecha_salida
      
    }
  }
  
  module.exports = TipoProyecto;