<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invitado extends Model
{
    use HasFactory;
    protected $table = 'invitado';
    protected $primaryKey = 'COD_invitado';
    public $timestamps = false;
}
