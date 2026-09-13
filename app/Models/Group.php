<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $fillable = [
        'name',
        'night_only'
        ,
        'field_id'
    ];

    function field()
    {
        return $this->belongsTo(Field::class);
    }

    function fieldGroupInstitutions()
    {
        return $this->hasMany(FieldGroupInstitution::class, 'group_id');
    }

    function modules()
    {
        return $this->hasMany(Module::class, 'group_id');
    }
}
