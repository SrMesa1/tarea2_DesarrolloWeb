<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Docente extends Model
{
    use HasFactory;
    protected $table = 'docente';
    protected $primaryKey = 'COD_docente';
    public $timestamps = false;

    public function proyectos()
    {
        return $this->belongsToMany(Proyecto::class, 'proyecto_docente', 'COD_docente', 'COD_proyecto');
    }
}
