<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class REPResultadoEsperadoProyecto extends Model
{
    use HasFactory;
    protected $table = 'rep_resultado_esperado_proyecto';
    protected $primaryKey = 'COD_REP';
    public $timestamps = false;

    public function proyecto()
    {
        return $this->belongsTo(Proyecto::class, 'COD_proyecto');
    }
}
