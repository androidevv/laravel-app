<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlankPage extends Model
{
    protected $table = 'blank_pages';
    public $primaryKey = 'id';
    public $timestamp = true;
}
