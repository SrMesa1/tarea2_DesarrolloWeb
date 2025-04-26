<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    use HasFactory;
    protected $table = 'proyecto';
    protected $primaryKey = 'COD_proyecto';
    public $timestamps = false;

    public function tipoProyecto()
    {
        return $this->belongsTo(TipoProyecto::class, 'COD_tipo_proyecto');
    }

    public function estudiantes()
    {
        return $this->hasMany(Estudiante::class, 'COD_Proyecto');
    }

    public function docentes()
    {
        return $this->belongsToMany(Docente::class, 'proyecto_docente', 'COD_proyecto', 'COD_docente');
    }

    public function asignaturas()
    {
        return $this->belongsToMany(Asignatura::class, 'proyecto_asignatura', 'COD_proyecto', 'COD_asignatura');
    }

    public function entregables()
    {
        return $this->hasMany(Entregable::class, 'COD_proyecto');
    }

    public function resultadosEsperados()
    {
        return $this->hasMany(REPResultadoEsperadoProyecto::class, 'COD_proyecto');
    }
}
