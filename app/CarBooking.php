<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarBooking extends Model
{
    protected $table = 'booking_form';
    public $primaryKey = 'id';
    public $timestamp = true;
}
