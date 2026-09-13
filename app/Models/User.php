<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'cin',
        'first_name',
        'last_name',
        'email',
        'password',
        'birthday',
        'photo',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    function instructors() {
        return $this->hasMany(Instructor::class, 'user_id');
    }

    function institutionAdmins() {
        return $this->hasMany(InstitutionAdmin::class, 'user_id');
    }

    function regionalAdmins() {
        return $this->hasMany(RegionalAdmin::class, 'user_id');
    }

    function superAdmins() {
        return $this->hasMany(SuperAdmin::class, 'user_id');
    }
}
