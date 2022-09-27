<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarInquiry extends Model
{
    protected $table = 'car_inquiry';
    public $primaryKey = 'id';
    public $timestamp = true;
}
