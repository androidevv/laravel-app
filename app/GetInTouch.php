<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GetInTouch extends Model
{
    protected $table = 'getin_touch';
    public $primaryKey = 'id';
    public $timestamp = true;
}
