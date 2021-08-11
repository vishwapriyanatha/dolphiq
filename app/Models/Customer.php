<?php


namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    /**
     * @var string
     */
    protected $table = 'customers';

    /**
     * @var string[]
     */
    protected $guarded = ['id'];
}
