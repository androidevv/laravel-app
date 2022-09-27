<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CallRequest extends Model
{
    protected $table = 'call_request';
    public $primaryKey = 'id';
    public $timestamp = true;
}
