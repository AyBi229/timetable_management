<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InstitutionAdmin extends Model
{
    protected $fillable = [
        'institution_id',
        'user_id',
    ];
}
