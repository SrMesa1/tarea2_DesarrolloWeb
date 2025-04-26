<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoProyecto extends Model
{
    use HasFactory;
    protected $table = 'tipo_proyecto';
    protected $primaryKey = 'COD_tipo_proyecto';
    public $timestamps = false;

    public function proyectos()
    {
        return $this->hasMany(Proyecto::class, 'COD_tipo_proyecto');
    }
}
