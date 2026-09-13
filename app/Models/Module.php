<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    protected $filables = [
        'name',
        'ref',
        'total_hours',
        'online_hours',
        'present_hours',
        'group_id',
        'regional'
    ];

    function group() {
        return $this->belongsTo(Group::class);
    }

    function fieldModules() {
        return $this->hasMany(FieldModule::class, 'module_id');
    }
}
