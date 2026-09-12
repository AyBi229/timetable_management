<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{

    protected $fillables = [
        'total_hrs_completed',
        'online_hrs_completed',
        'present_hrs_completed',
        'evaluated',
        'module_id',
        'group_id',
        'instructor_id',
    ];

    function Module() {
        return $this->belongsTo(Module::class);
    }

    function Group() {
        return $this->belongsTo(Group::class);
    }

    function Instructor() {
        return $this->belongsTo(Instructor::class);
    }

    function ClassSessions() {
        return $this->hasMany(ClassSession::class, 'assignment_id');
    }
}
