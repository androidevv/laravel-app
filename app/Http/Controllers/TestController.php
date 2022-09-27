<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function test(){

    	//dd($request->input('name'));

    	$arrayName = array(
                    		'1' => 'test1', 
                    		'2' => 'test2', 
                    		'3' => 'test3', 
                    		'4' => 'test4', 
                    		'5' => 'test5', 
                    		'6' => 'test6', 
                    	);
    	return view('test', compact('arrayName'));
    }

    public function formSubmit(Request $request){
    	dd($request->input('this'));
    }
}
