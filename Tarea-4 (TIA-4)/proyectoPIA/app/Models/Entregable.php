<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entregable extends Model
{
    use HasFactory;
    protected $table = 'entregable';
    protected $primaryKey = 'COD_entregable';
    public $timestamps = false;

    public function proyecto()
    {
        return $this->belongsTo(Proyecto::class, 'COD_proyecto');
    }

    public function tipos()
    {
        return $this->belongsToMany(TipoEntregable::class, 'entregable_tipo_entregable', 'COD_entregable', 'COD_tipoentregable');
    }
}
