<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FieldGroupInstitution extends Model
{
    protected $fillable = [
        'field_id',
        'group_id',
        'institution_id'
    ];

    function field() {
        return $this->belongsTo(Field::class);
    }

    function group() {
        return $this->belongsTo(Group::class);
    }

    function institution() {
        return $this->belongsTo(Institution::class);
    }
}
