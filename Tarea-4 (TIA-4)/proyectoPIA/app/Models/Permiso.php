<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permiso extends Model
{
    use HasFactory;
    protected $table = 'permiso';
    protected $primaryKey = 'COD_permiso';
    public $timestamps = false;

    public function roles()
    {
        return $this->belongsToMany(Rol::class, 'rol_permiso', 'COD_permiso', 'COD_rol');
    }
}
