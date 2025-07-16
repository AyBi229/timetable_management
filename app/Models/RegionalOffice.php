<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RegionalOffice extends Model
{
    protected $fillable = [
        'region',
    ];

    function regionalAdmins() {
        return $this->hasMany(RegionalAdmin::class, 'regional_office_id');
    }
}
