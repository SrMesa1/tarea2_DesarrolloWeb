const db = require('../config/database');
const tipoProyecto = require('../models/TipoProyecto');

class ProyectosRepository {
  
  /**
   * Listado de Tipos de Proyectos
   */
  async getAll() {
    const { rows } = await db.query('SELECT * FROM tipo_proyecto');
    //
    return rows.map(row => new tipoProyecto(
      row.id,
      row.codigo,
      row.descripcion,
      row.abreviatura,
      row.fecha_registro,
    ));
  }

  async getById(id) {
    const { rows } = await db.query('SELECT * FROM tipo_proyecto WHERE id = $1', [id]);
    if (rows.length === 0) return null;
    const row = rows[0];
    return new tipoProyecto(
      row.id,
      row.codigo,
      row.descripcion,
      row.abreviatura,
      row.fecha_registro,
    );
  }

  
  async create(proyecto) {
    const { rows } = await db.query(
      'INSERT INTO tipo_proyecto (codigo, descripcion, abreviatura) VALUES ($1, $2, $3) RETURNING *',
      [proyecto.codigo, proyecto.descripcion, proyecto.abreviatura]
    );
    const row = rows[0];
    return new tipoProyecto(
      row.id,
      row.codigo,
      row.descripcion,
      row.abreviatura,
      row.fecha_registro,
    );
  }

  async update(id, proyecto) {
    const { rows } = await db.query(
      'UPDATE tipo_proyecto SET descripcion = $1 , abreviatura = $2 WHERE codigo = $3 RETURNING *',
      [proyecto.descripcion,proyecto.abreviatura, proyecto.codigo]
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return new tipoProyecto(
      row.id,
      row.codigo,
      row.descripcion,
      row.abreviatura,
      row.fecha_registro,
    );
  }

  async delete(id) {
    const { rowCount } = await db.query('DELETE FROM tipo_proyecto WHERE id = $1', [id]);
    return rowCount > 0;
  }

  async registrarSalida(id) {
    const { rows } = await db.query(
      'UPDATE tipo_proyecto SET fecha_registro = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *',
      [id]
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return new tipoProyecto(
      row.id,
      row.codigo,
      row.descripcion,
      row.abreviatura,
      row.fecha_registro,
    );
  }
}

module.exports = new ProyectosRepository();