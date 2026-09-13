<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Field extends Model
{
    protected $fillable = [
        'name',
        'ref',
        'level',
        'industry_id'
    ];

    function industry() {
        return $this->belongsTo(Industry::class);
    }

    function commonModules() {
        return $this->hasMany(Field::class, 'field_id');
    }

    function fieldGroupInstitutions() {
        return $this->hasMany(FieldGroupInstitution::class, 'field_id');
    }

    function fieldModules() {
        return $this->hasMany(FieldModule::class, 'field_id');
    }

    function groups() {
        return $this->hasMany(Group::class, 'group_id');
    }
}
