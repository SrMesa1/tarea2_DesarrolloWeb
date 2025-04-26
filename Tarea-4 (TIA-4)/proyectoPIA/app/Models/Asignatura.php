<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Asignatura extends Model
{
    use HasFactory;
    protected $table = 'asignatura';
    protected $primaryKey = 'COD_asignatura';
    public $timestamps = false;

    public function programas()
    {
        return $this->belongsToMany(ProgramaAcademico::class, 'programa_academico_asignatura', 'COD_asignatura', 'COD_programa');
    }

    public function proyectos()
    {
        return $this->belongsToMany(Proyecto::class, 'proyecto_asignatura', 'COD_asignatura', 'COD_proyecto');
    }
}
