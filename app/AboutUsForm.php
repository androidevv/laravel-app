<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AboutUsForm extends Model
{
    protected $table = 'about_us_form';
    public $primaryKey = 'id';
    public $timestamp = true;
}
