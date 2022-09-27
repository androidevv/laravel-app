<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
   function index()
   {
   	$title = 'this is the title sent from controller';
   	//return view('pages.index' , compact('title'));
   	return view('pages.index')->with('page_header' , $title);
   }
}
