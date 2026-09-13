<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommonModule extends Model
{
    protected $fillable = [
        'module_id',
        'field_id',
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
