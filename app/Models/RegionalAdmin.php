<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RegionalAdmin extends Model
{
    protected $fillable = [
        'user_id',
        'regional_office_id',
    ];
}
