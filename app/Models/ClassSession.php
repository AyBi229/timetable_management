<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClassSession extends Model
{
    protected $fillable = [
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

    function assignment()
    {
        return $this->belongsTo(Assignment::class);
    }

    function timetable()
    {
        return $this->belongsTo(Timetable::class);
    }
}
