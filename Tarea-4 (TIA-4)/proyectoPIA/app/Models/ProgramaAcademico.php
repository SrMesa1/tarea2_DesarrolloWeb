<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramaAcademico extends Model
{
    use HasFactory;
    protected $table = 'programa_academico';
    protected $primaryKey = 'COD_programa';
    public $timestamps = false;

    public function estudiantes()
    {
        return $this->hasMany(Estudiante::class, 'COD_programa');
    }

    public function asignaturas()
    {
        return $this->belongsToMany(Asignatura::class, 'programa_academico_asignatura', 'COD_programa', 'COD_asignatura');
    }
}
