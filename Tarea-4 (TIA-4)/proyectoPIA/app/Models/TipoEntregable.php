<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoEntregable extends Model
{
    use HasFactory;
    protected $table = 'tipo_entregable';
    protected $primaryKey = 'COD_tipoentregable';
    public $timestamps = false;

    public function entregables()
    {
        return $this->belongsToMany(Entregable::class, 'entregable_tipo_entregable', 'COD_tipoentregable', 'COD_entregable');
    }
}
