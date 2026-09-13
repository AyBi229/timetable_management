<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SuperAdmin extends Model
{
    protected $fillable = [
        'user_id'
    ];

    function user() {
        return $this->belongsTo(User::class);
    }
}
