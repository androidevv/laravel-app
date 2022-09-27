<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $table = 'cars';
    public $primaryKey = 'car_id';
    public $timestamp = true;
}
