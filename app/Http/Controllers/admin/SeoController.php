<?php

namespace App\Http\Controllers\admin;

use App\Seo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class SeoController extends Controller
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
        $data['page_title'] = 'seo';
        $data['seos'] = Seo::orderBy('name' , 'asc')->paginate(10);
        //var_dump($categories); die;
        return view('admin.seo.index' , $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['page_title'] = 'seo';
        $data['pages']      = array('home','carlist', 'car_detail', 'checkout', 'about_us', 'contact_us', 'blogs');

        return view('admin.seo.create' , $data);
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

        $seo              = new Seo;

        $seo->name             = $request->input('name');
        $seo->page             = $request->input('page');
        $seo->meta_title       = $request->input('meta_title');
        $seo->slug             = $request->input('slug');
        $seo->meta_keywords    = $request->input('meta_keywords');
        $seo->meta_description = $request->input('meta_description');
        $seo->article          = $request->input('article');
        $seo->is_enabled       = $request->input('is_enabled');

        //$brand->is_enabled = auth()->user()->id;
        $seo->Save();

        return redirect(url('admin/seo_panel'));
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
        $data['page_title'] = 'seo';
        $data['pages']      = array('home','carlist', 'about_us', 'contact_us', 'blogs');

        $data['seo']     = Seo::find($id);
        return view('admin.seo.edit' , $data);
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


        $seo = Seo::find($id);
        $seo->name             = $request->input('name');
        $seo->page             = $request->input('page');
        $seo->meta_title       = $request->input('meta_title');
        $seo->slug             = $request->input('slug');
        $seo->meta_keywords    = $request->input('meta_keywords');
        $seo->meta_description = $request->input('meta_description');
        $seo->article          = $request->input('article');
        $seo->is_enabled       = $request->input('is_enabled');

        //$brand->is_enabled = auth()->user()->id;
        $seo->Save();

        return redirect(url('admin/seo_panel'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $seo = Seo::find($id);
        $seo->delete();
        return redirect(url('admin/seo_panel'));
    }
}
