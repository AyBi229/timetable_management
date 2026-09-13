<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Timetable extends Model
{
    protected $fillable=['program', 'week_nbr'];

    function program() {
        return $this->belongsTo(Program::class);
    }
}
