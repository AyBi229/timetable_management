<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Complex extends Model
{
    protected $fillable = [
        'name',
        'office_id'
    ];

    function office() {
        return $this->belongsTo(RegionalOffice::class);
    }

    function institutions() {
        return $this->hasMany(Institution::class, 'complex_id');
    }
}
