<?php

namespace App\Http\Controllers\admin;

use App\CustomCode;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class CustomCodeController extends Controller
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
        $data['page_title'] = 'code';
        $data['codes']      = CustomCode::orderBy('name' , 'asc')->paginate(10);
        //var_dump($categories); die;
        return view('admin.code.index' , $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['page_title']  = 'code';
        $data['positions']   = array('header' , 'footer');

        return view('admin.code.create' , $data);
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
            'is_enabled' => 'required'
        ]);

        $code                 = new CustomCode();

        $code->name             = $request->input('name');
        $code->position         = $request->input('position');
        $code->code             = $request->input('code');
        $code->is_enabled       = $request->input('is_enabled');
        //$brand->is_enabled = auth()->user()->id;
        $code->Save();

        return redirect(url('admin/CustomCodes'));
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
        $data['page_title'] = 'code';

        $data['code'] = CustomCode::find($id);
        return view('admin.code.edit' , $data);
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

        $code = CustomCode::find($id);

        $code->name             = $request->input('name');
        $code->position         = $request->input('position');
        $code->code             = $request->input('code');
        $code->is_enabled       = $request->input('is_enabled');
        //$brand->is_enabled = auth()->user()->id;
        $code->Save();

        return redirect(url('admin/blogs'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $code = CustomCode::find($id);
        $code->delete();
        return redirect(url('admin/CustomCodes'));
    }
}
