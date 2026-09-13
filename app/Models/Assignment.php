<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{

    protected $fillable = [
        'total_hrs_completed',
        'online_hrs_completed',
        'present_hrs_completed',
        'evaluated',
        'module_id',
        'group_id',
        'instructor_id',
    ];

    function Module()
    {
        return $this->belongsTo(Module::class);
    }

    function group()
    {
        return $this->belongsTo(Group::class);
    }

    function instructor()
    {
        return $this->belongsTo(Instructor::class);
    }

    function classSessions()
    {
        return $this->hasMany(ClassSession::class, 'assignment_id');
    }
}
