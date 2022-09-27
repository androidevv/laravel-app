<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomCode extends Model
{
    protected $table   = 'custom_codes';
    public $primaryKey = 'id';
    public $timestamp  = true;
}
