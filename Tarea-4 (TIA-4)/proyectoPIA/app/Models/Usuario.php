<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuario';
    protected $primaryKey = 'COD_usuario';
    public $timestamps = false;

    public function rol()
    {
        return $this->belongsTo(Rol::class, 'COD_rol');
    }
}
