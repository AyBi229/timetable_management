<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    protected $fillable = [
        'user_id',
        'institution_id',
    ];

    function user()
    {
        return $this->belongsTo(User::class);
    }

    function institution()
    {
        return $this->belongsTo(Institution::class);
    }
}
