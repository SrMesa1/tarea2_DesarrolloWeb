<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    use HasFactory;
    protected $table = 'estudiante';
    protected $primaryKey = 'COD_estudiante';
    public $timestamps = false;

    public function programa()
    {
        return $this->belongsTo(ProgramaAcademico::class, 'COD_programa');
    }

    public function proyecto()
    {
        return $this->belongsTo(Proyecto::class, 'COD_Proyecto');
    }
}
