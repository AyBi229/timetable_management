<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Institution extends Model
{
    protected $fillable = [
        'ref',
        'name',
        'complex_id'
    ];

    function complex() {
        return $this->belongsTo(Complex::class);
    }

    function admins() {
        return $this->hasMany(Institution::class, 'institution_id');
    }
}
