<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FieldModule extends Model
{
    protected $fillable = [
        'module_id', // module id
        'field_id'
    ];

    function module()
    {
        return $this->belongsTo(Module::class);
    }

    function field()
    {
        return $this->belongsTo(Field::class);
    }

}
