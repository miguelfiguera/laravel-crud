<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class profile extends Model
{
    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'address',
        'state',
        'country',
    ];
}
