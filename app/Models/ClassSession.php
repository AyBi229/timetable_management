<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClassSession extends Model
{
    protected $fillables = [
        'classroom',
        'exam',
        'period',
        'date',
        'start',
        'end',
        'achieved',
        'assignment_id',
        'timetable_id'
    ];

    function Assignment() {
        return $this->belongsTo(Assignment::class);
    }

    function Timetable() {
        return $this->belongsTo(Timetable::class);
    }
}
