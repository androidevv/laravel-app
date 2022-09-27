<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $table = 'brands';
    public $primaryKey = 'brand_id';
    public $timestamp = true;
}
