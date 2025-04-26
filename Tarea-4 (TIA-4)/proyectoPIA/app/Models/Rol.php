<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    use HasFactory;
    protected $table = 'rol';
    protected $primaryKey = 'COD_rol';
    public $timestamps = false;

    public function usuarios()
    {
        return $this->hasMany(Usuario::class, 'COD_rol');
    }

    public function permisos()
    {
        return $this->belongsToMany(Permiso::class, 'rol_permiso', 'COD_rol', 'COD_permiso');
    }
}
