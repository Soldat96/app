<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MyUser extends Model
{
    protected $fillable = [
        'first_name', 'middle_name', 'last_name', 'address', 'phone_number'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}
