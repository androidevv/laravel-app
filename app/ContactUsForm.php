<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactUsForm extends Model
{
    protected $table = 'contactus';
    public $primaryKey = 'id';
    public $timestamp = true;
}
