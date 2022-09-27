<?php

namespace App\Http\Controllers\admin;

use App\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $data['page_title'] = 'blank';
        $data['blank_pages'] = Article::orderBy('name' , 'asc')->paginate(10);
        //var_dump($categories); die;
        return view('admin.blank.index' , $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['page_title']  = 'blank';
        $data['pages']       = array('home');
        return view('admin.blank.create' , $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request , [
            'name'       => 'required',
            'is_enabled' => 'required',
        ]);

        $blank                 = new Article();

        $blank->name             = $request->input('name');
        $blank->content          = $request->input('content');
        $blank->meta_title       = $request->input('meta_title');
        $blank->slug             = $request->input('slug');
        $blank->meta_keywords    = $request->input('meta_keywords');
        $blank->meta_description = $request->input('meta_description');
        $blank->is_enabled       = $request->input('is_enabled');

        //$brand->is_enabled = auth()->user()->id;
        $blank->Save();

        return redirect(url('admin/blank_pages'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['page_title'] = 'blank';

        $data['blank_page']     = Article::find($id);
        return view('admin.blank.edit' , $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request , [
            'name'       => 'required',
            'is_enabled' => 'required'
        ]);


        $blank = Article::find($id);

        $blank->name             = $request->input('name');
        $blank->content          = $request->input('content');
        $blank->meta_title       = $request->input('meta_title');
        $blank->slug             = $request->input('slug');
        $blank->meta_keywords    = $request->input('meta_keywords');
        $blank->meta_description = $request->input('meta_description');
        $blank->is_enabled       = $request->input('is_enabled');

        //$brand->is_enabled = auth()->user()->id;
        $blank->Save();

        return redirect(url('admin/blank_pages'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blank = Article::find($id);
        $blank->delete();
        return redirect(url('admin/blank_pages'));
    }
}
