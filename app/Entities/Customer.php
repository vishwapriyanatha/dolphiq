<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use SoftDeletes;

    protected $fillable = ['first_name', 'last_name', 'phone_number', 'email_address'];
    protected $appends = ['name'];


    public function getNameAttribute($value)
    {
        return $this->first_name . ' ' . $this->last_name;
    }
}
