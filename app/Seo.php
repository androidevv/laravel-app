<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Seo extends Model
{
    protected $table = 'seos';
    public $primaryKey = 'id';
    public $timestamp = true;
}
